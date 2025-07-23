document.getElementById('optin-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const status = document.getElementById('status');

  if (!email) {
    status.innerText = "Please enter a valid email.";
    return;
  }

  // 👉 Replace with your Supabase project credentials
  const SUPABASE_URL = 'https://gnhawdyxtulfkgukkgzl.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

  const { createClient } = supabase;
  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  try {
    const { data, error } = await supabaseClient.from('optins').insert([{ email }]);
    if (error) {
      status.innerText = 'There was an error. Please try again.';
    } else {
      status.innerText = '✅ Success! Redirecting...';
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    }
  } catch (err) {
    status.innerText = 'Unexpected error occurred.';
  }
});
