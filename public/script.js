// Your Supabase credentials
const SUPABASE_URL = 'https://mpndddsksdvpwospupdj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Use full key here

// Get form and UI elements
const form = document.getElementById('lead-form');
const emailInput = document.getElementById('email');
const message = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email) {
    message.textContent = '⚠️ Please enter a valid email address.';
    return;
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({ email })
    });

    const result = await response.json();
    console.log('Supabase Response:', result);

    if (!response.ok) {
      message.textContent = '⚠️ Something went wrong. Please try again.';
    } else {
      message.textContent = '✅ You’ve been subscribed!';
      form.reset();

      // Optional: redirect to success page
      // window.location.href = 'success.html';
    }

  } catch (err) {
    console.error('Network Error:', err);
    message.textContent = '⚠️ Network error. Please try again.';
  }
});
