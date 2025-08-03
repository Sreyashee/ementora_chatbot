const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// ✅ Correct API endpoint
const BACKEND_URL = 'https://ementora-chatbot.onrender.com/api/chat';

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const message = userInput.value.trim();
  if (!message) return;

  chatBox.innerHTML += `<div class="message user"><strong>You:</strong> ${message}</div>`;
  showTypingIndicator();

  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.reply;

    setTimeout(() => {
      hideTypingIndicator();

      const botDiv = document.createElement('div');
      botDiv.classList.add('message', 'bot');
      botDiv.innerHTML = `<strong>Bot:</strong> ${reply}`;
      chatBox.appendChild(botDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

  } catch (error) {
    hideTypingIndicator();
    chatBox.innerHTML += `<div class="error-message">Something went wrong. Please try again.</div>`;
    console.error('Error:', error);
  }

  userInput.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
});

function showTypingIndicator() {
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


