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

    formMessage.textContent = "✅ You're in! Your PDF is downloading...";
    emailInput.value = "";

    // Wait a second before triggering download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'nextforge-report.pdf'; // must match your file name
      link.download = 'NextForge-Report.pdf';
      link.click();
    }, 1000);

  } catch (err) {
    console.error(err);
    formMessage.textContent = "⚠️ There was a problem saving your email. Please try again.";
  }
});
