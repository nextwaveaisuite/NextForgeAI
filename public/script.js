// === Stripe + PayPal Modal Logic ===
document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModal");
  const modal = document.getElementById("payModal");
  const closeModal = document.getElementById("closeModal");

  if (openModalBtn && modal && closeModal) {
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  // Stripe Checkout Redirect
  const stripeBtn = document.getElementById("stripeBtn");
  if (stripeBtn) {
    stripeBtn.addEventListener("click", () => {
      window.location.href = "https://buy.stripe.com/test_8wM3cz4NK0F6f2E3cc"; // Replace with live link
    });
  }

  // PayPal Button Load
  const paypalBtn = document.getElementById("paypalBtn");
  if (paypalBtn) {
    paypalBtn.innerHTML = `
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="business" value="nextwaveaisuite@gmail.com">
        <input type="hidden" name="cmd" value="_xclick">
        <input type="hidden" name="item_name" value="NextForge AI Pro Access">
        <input type="hidden" name="amount" value="12.95">
        <input type="hidden" name="currency_code" value="USD">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" 
               border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" width="1" height="1" 
             src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif">
      </form>
    `;
  }
});

// === AI Assistant Logic ===
function generateResponse() {
  const input = document.getElementById("userInput").value.trim();
  const output = document.getElementById("aiOutput");

  if (!input) {
    output.textContent = "❗ Please enter a prompt to generate a SaaS idea.";
    return;
  }

  // Simulated AI output (replace with OpenAI API integration if desired)
  output.innerHTML = `✅ Generating real SaaS Tool for: <strong>${input}</strong><br><br>
  <pre>{
    "tool_name": "${input.replace(/ /g, '')}Pro",
    "features": [
      "AI-Generated Branding",
      "Automated Traffic Engine",
      "Lead Capture & CRM",
      "One-Click Export"
    ],
    "status": "✅ Tool generated successfully!"
  }</pre>`;
}

// === Copy Output Function ===
function copyOutput() {
  const outputText = document.getElementById("aiOutput").innerText;
  navigator.clipboard.writeText(outputText).then(() => {
    alert("✅ Output copied to clipboard!");
  });
}

// === Dynamic Access Gating (For Future Plan Logic) ===
function unlockProFeatures() {
  const proSection = document.getElementById("proOnly");
  if (proSection) {
    proSection.classList.remove("hidden");
    alert("🎉 Pro features unlocked!");
  }
}
  
