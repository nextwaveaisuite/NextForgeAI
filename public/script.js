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
    const response = await fetch('https://api.getresponse.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 'api-key h67sprn9pa6n48g80743krjwcpwkv263'
      },
      body: JSON.stringify({
        email: email,
        name: "",
        campaign: {
          name: "nextwaveaisuite"
        }
      })
    });

    if (response.status === 202 || response.status === 200) {
      formMessage.textContent = "✅ You're in! Downloading your PDF...";

      // Start PDF download
      const link = document.createElement('a');
      link.href = 'nextforge-report.pdf';
      link.download = 'NextForge-Report.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Redirect to thank-you page
      setTimeout(() => {
        window.location.href = 'success.html';
      }, 1800);

      emailInput.value = "";
    } else {
      const errorData = await response.json();
      console.error("GetResponse API error:", errorData);
      formMessage.textContent = "⚠️ Something went wrong. Please try again.";
    }
  } catch (err) {
    console.error("Network error:", err);
    formMessage.textContent = "⚠️ There was a network error. Please try again.";
  }
});
