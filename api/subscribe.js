document.getElementById("lead-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const formMessage = document.getElementById("form-message");
  formMessage.textContent = "⏳ Submitting...";

  try {
    const response = await fetch("https://api.getresponse.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "api-key ryzjwabz8gunafspawbkdyp2nk9mg6ce"
      },
      body: JSON.stringify({
        email: email,
        campaign: {
          campaignId: "iKQYF"
        }
      })
    });

    if (response.ok) {
      formMessage.textContent = "✅ You're in! Check your inbox.";
      document.getElementById("lead-form").reset();
    } else {
      const errorData = await response.json();
      console.error("Error details:", errorData);
      formMessage.textContent = "⚠️ Something went wrong. Please try again.";
    }
  } catch (error) {
    console.error("Request error:", error);
    formMessage.textContent = "⚠️ Network error. Please check your connection.";
  }
});
