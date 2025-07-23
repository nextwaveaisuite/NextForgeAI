const form = document.getElementById('lead-form');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email) {
    formMessage.textContent = "Please enter a valid email.";
    return;
  }

  try {
    const response = await fetch('https://YOUR-SUPABASE-URL.supabase.co/rest/v1/leads', {
      method: 'POST',
      headers: {
        'apikey': 'YOUR-ANON-KEY',
        'Authorization': 'Bearer YOUR-ANON-KEY',
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) throw new Error('Failed to submit');

    formMessage.textContent = "✅ You're in! Downloading your PDF...";

    // Start download
    const link = document.createElement('a');
    link.href = 'nextforge-report.pdf'; // Ensure this file exists in /public
    link.download = 'NextForge-Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Redirect after short delay
    setTimeout(() => {
      window.location.href = 'success.html';
    }, 1800);

    emailInput.value = "";

  } catch (err) {
    console.error(err);
    formMessage.textContent = "⚠️ There was a problem saving your email. Please try again.";
  }
});
