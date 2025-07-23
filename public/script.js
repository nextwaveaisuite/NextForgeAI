document.getElementById("optin-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const status = document.getElementById("status");

  try {
    const res = await fetch("https://gnhawdyxtulfkgukkgzl.supabase.co/rest/v1/optins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "SUPABASE_ANON_KEY_HERE",
        Authorization: "Bearer SUPABASE_ANON_KEY_HERE",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      status.textContent = "✅ Success! Please check your inbox.";
      status.style.color = "lightgreen";
      document.getElementById("optin-form").reset();
    } else {
      status.textContent = "❌ Error: Unable to save email.";
      status.style.color = "orange";
    }
  } catch (err) {
    status.textContent = "❌ Network error.";
    status.style.color = "red";
  }
});
