// === Supabase Details (Pre-filled for you) ===
const SUPABASE_URL = 'https://mpndddsksdvpwospupdj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wbmRkZHNrc2R2cHdvc3B1cGRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzM1NzAsImV4cCI6MjAzNDY0OTU3MH0.xz1OQzy41LV8Hj7JfY9UvfvWtyNjXyXWH-dnI0LydTk';

// === Form Elements ===
const form = document.getElementById('lead-form');
const emailInput = document.getElementById('email');
const message = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  // Simple email validation
  if (!email || !email.includes('@') || email.length < 5) {
    message.textContent = '⚠️ Please enter a valid email address.';
    message.style.color = 'red';
    return;
  }

  try {
    // Send to Supabase
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
      message.style.color = 'red';
    } else {
      // Redirect to success page
      window.location.href = 'success.html';
    }
  } catch (err) {
    console.error('Network Error:', err);
    message.textContent = '⚠️ Network error. Please try again.';
    message.style.color = 'red';
  }
});
