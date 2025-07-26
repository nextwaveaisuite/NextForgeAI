// Simulate AI response generation
function generateAIResponse() {
  const input = document.getElementById("userInput").value;
  const output = document.getElementById("aiOutput");

  if (input.trim() === "") {
    output.innerText = "Please enter something for the AI to respond to.";
    return;
  }

  output.innerText = `Simulated response to: ${input}`;
}

// Copy output
function copyOutput() {
  const output = document.getElementById("aiOutput").innerText;
  navigator.clipboard.writeText(output).then(() => {
    alert("Copied to clipboard!");
  });
}

// Show payment modal
function openPaymentModal() {
  document.getElementById("paymentModal").style.display = "flex";
}

// Close modal
function closeModal() {
  document.getElementById("paymentModal").style.display = "none";
}

// Redirect to Stripe Checkout
function payWithStripe() {
  window.location.href = "https://buy.stripe.com/4gw6qf9gf7zH6Fq7ss";
}

// Redirect to PayPal
function payWithPayPal() {
  window.location.href = "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=nextwaveaisuite@gmail.com&currency_code=USD&amount=12.95&item_name=NextForge+Pro+Upgrade";
}

// Unlock Pro features
function unlockProView() {
  document.getElementById("proOnlyContent").classList.remove("hidden");
  document.getElementById("upgradeBtn").classList.add("hidden");
  alert("🎉 Pro features unlocked!");
}
