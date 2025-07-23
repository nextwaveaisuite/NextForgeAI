document.getElementById("optin-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const status = document.getElementById("status");

  try {
    const res = await fetch("https://gnhawdyxtulfkgukkgzl.supabase.co/rest/v1/optins", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduaGF3ZHl4dHVsZmtndWtrZ3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzgyMzgsImV4cCI6MjA2ODY1NDIzOH0.lh9kHboN4crAcAY26s_352_2JzUa9mQpAermNk9wVk8",
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduaGF3ZHl4dHVsZmtndWtrZ3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzgyMzgsImV4cCI6MjA2ODY1NDIzOH0.lh9kHboN4crAcAY26s_352_2JzUa9mQpAermNk9wVk8",
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
