// Replace with your real Supabase URL and key
const SUPABASE_URL = "https://gnhawdyxtulfkgukkgzl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ...";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.getElementById("optin-form");
const emailInput = document.getElementById("email");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email) return;

  const { error } = await client.from("optins").insert([{ email }]);

  if (error) {
    statusMessage.textContent = "❌ Something went wrong. Try again.";
  } else {
    statusMessage.textContent = "✅ You're in! Redirecting...";
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  }
});
