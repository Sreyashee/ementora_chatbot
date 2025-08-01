const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const message = userInput.value.trim();
  if (!message) return;

  // Show user message
  chatBox.innerHTML += `<div class="message user"><strong>You:</strong> ${message}</div>`;


  try {
     showTypingIndicator();

    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message }) // 👈 This must match backend
    });

    const data = await response.json();
    const reply = data.reply;

    setTimeout(() => {
  hideTypingIndicator(); // Remove typing dots

  const botDiv = document.createElement('div');
  botDiv.classList.add('message', 'bot');
  botDiv.innerHTML = `<strong>Bot:</strong> ${reply}`;
  chatBox.appendChild(botDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}, 1000);
    //chatBox.innerHTML += `<div class="message bot"><strong>Bot:</strong> ${reply}</div>`;

  } catch (error) {
    chatBox.innerHTML += `<div class="error-message">Something went wrong.</div>`;
    console.error('Error:', error);
  }

  userInput.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
});
function showTypingIndicator() {
  const chatBox = document.getElementById('chat-box');
  const typing = document.createElement('div');
  typing.classList.add('bot-message', 'typing-indicator');
  typing.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTypingIndicator() {
  const indicator = document.querySelector('.typing-indicator');
  if (indicator) indicator.remove();
}

