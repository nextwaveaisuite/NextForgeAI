const form = document.getElementById('lead-form');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  formMessage.textContent = "";

  if (!email) {
    formMessage.textContent = "Please enter a valid email.";
    return;
  }

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const result = await response.json();

    if (response.ok && result.success) {
      formMessage.textContent = "✅ You're in! Downloading your PDF...";

      const link = document.createElement('a');
      link.href = 'nextforge-report.pdf';
      link.download = 'NextForge-Report.pdf';
      link.click();

      setTimeout(() => {
        window.location.href = 'success.html';
      }, 1800);
    } else {
      console.error(result);
      formMessage.textContent = "⚠️ Something went wrong. Try again.";
    }
  } catch (err) {
    console.error(err);
    formMessage.textContent = "⚠️ Network error. Please try again.";
  }
});
