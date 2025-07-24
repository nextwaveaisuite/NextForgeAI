const SUPABASE_URL = 'https://gnhawdytxulfkgukkgzl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduaGF3ZHl4dHVsZmtndWtrZ3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzgyMzgsImV4cCI6MjA2ODY1NDIzOH0.lh9kHboN4crAcAY26s_352_2JzUa9mQpAermNk9wVk8';

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

    if (!response.ok) {
  console.error('Supabase Error:', result);
  message.textContent = '⚠️ Something went wrong. Please try again.';
} else {
  message.textContent = '✅ You’ve been subscribed!';
  form.reset();
  window.location.href = 'success.html'; // <-- this triggers the redirect
}
  } catch (err) {
    console.error('Network Error:', err);
    message.textContent = '⚠️ Network error. Please try again.';
  }
});
