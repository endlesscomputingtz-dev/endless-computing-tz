const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

// Auto-scroll to bottom
function scrollToBottom() {
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Initial greeting
window.onload = function() {
  setTimeout(() => {
    addMessage("Bot", "Hello 👋 Welcome to Endless Computing. How can I help you today?", "bot-msg");
  }, 500);
};

function addMessage(sender, text, className) {
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<p class="${className}"><strong>${sender}:</strong> ${text}</p>`;
  // We append the p directly or wrap it? The CSS expects p inside #chat-body
  // Let's match the CSS structure: #chat-body p
  // Actually, my CSS has .user-msg and .bot-msg on the p tag.
  // So:
  chatBody.innerHTML += `<p class="${className}"><strong>${sender}:</strong> ${text}</p>`;
  scrollToBottom();
}

function botReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("services") || msg.includes("huduma")) {
    return "We offer CCTV installation, Computer & Network Setup, Access Control, Fingerprint Systems, IT Support, and Printing services.";
  }
  if (msg.includes("cctv") || msg.includes("camera")) {
    return "We install and maintain high-quality CCTV surveillance systems for homes and businesses to ensure your security.";
  }
  if (msg.includes("network") || msg.includes("internet")) {
    return "We provide complete computer networking solutions, including router setup, cabling, and server configuration.";
  }
  if (msg.includes("contact") || msg.includes("email") || msg.includes("phone")) {
    return "You can email us at endlesscomputingtz@gmail.com or visit our Contact page for more details.";
  }
  if (msg.includes("price") || msg.includes("cost") || msg.includes("quote") || msg.includes("bei")) {
    return "Pricing depends on the specific project requirements. Please contact us for a free quotation!";
  }
  if (msg.includes("support") || msg.includes("help")) {
    return "For technical support, please visit our Support page or describe your issue here.";
  }
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("mambo")) {
    return "Hello there! 👋 How can Endless Computing assist you with your IT needs today?";
  }
  
  return "I'm not sure I understand. We specialize in IT services like CCTV, Networking, and Access Control. How can we help?";
}

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userMsg = chatInput.value.trim();
    if (userMsg !== "") {
      addMessage("You", userMsg, "user-msg");
      chatInput.value = "";
      
      // Simulate thinking delay
      setTimeout(() => {
        const reply = botReply(userMsg);
        addMessage("Bot", reply, "bot-msg");
      }, 600);
    }
  }
});
