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
    const response = await fetch('https://mpndddsksdvpwospupdj.supabase.co/rest/v1/leads', {
      method: 'POST',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduaGF3ZHl4dHVsZmtndWtrZ3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzgyMzgsImV4cCI6MjA2ODY1NDIzOH0.lh9kHboN4crAcAY26s_352_2JzUa9mQpAermNk9wVk8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduaGF3ZHl4dHVsZmtndWtrZ3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzgyMzgsImV4cCI6MjA2ODY1NDIzOH0.lh9kHboN4crAcAY26s_352_2JzUa9mQpAermNk9wVk8',
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) throw new Error('Failed to submit');

    formMessage.textContent = "✅ You're in! Downloading your PDF...";

    // Trigger download
    const link = document.createElement('a');
    link.href = 'nextforge-report.pdf'; // Make sure this file exists in /public
    link.download = 'NextForge-Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Redirect to thank-you page
    setTimeout(() => {
      window.location.href = 'success.html';
    }, 1800);

    emailInput.value = "";

  } catch (err) {
    console.error(err);
    formMessage.textContent = "⚠️ There was a problem saving your email. Please try again.";
  }
});
