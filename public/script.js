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
    const { data, error } = await fetch('https://YOUR-SUPABASE-URL.supabase.co/rest/v1/leads', {
      method: 'POST',
      headers: {
        'apikey': 'YOUR-ANON-KEY',
        'Authorization': 'Bearer YOUR-ANON-KEY',
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ email })
    });

    if (error) throw error;

    formMessage.textContent = "✅ You're in! Check your inbox shortly.";
    emailInput.value = "";
  } catch (err) {
    console.error(err);
    formMessage.textContent = "⚠️ There was a problem saving your email. Please try again.";
  }
});
