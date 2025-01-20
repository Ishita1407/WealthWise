document.getElementById('send-btn').addEventListener('click', sendMessage);

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Function to send a user message
function sendMessage() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // Display user's message
  appendMessage('user', userMessage);

  // Clear input field
  userInput.value = '';

  // Simulate chatbot response
  fetchChatbotResponse(userMessage);
}

// Append message to chatbox
function appendMessage(sender, message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender === 'user' ? 'user-message' : 'bot-message'}`;
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);

  // Auto-scroll to the bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Fetch chatbot response using Gemini API
async function fetchChatbotResponse(userMessage) {
  appendMessage('bot', 'Typing...'); // Temporary response
  try {
    const response = await fetch('https://api.gemini.com/v1/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'API KEY', // Replace with your API key
      },
      body: JSON.stringify({ query: userMessage }),
    });

    if (!response.ok) throw new Error('Error fetching chatbot response');

    const data = await response.json();
    const advice = data.advice || 'Sorry, I couldn’t find relevant advice.';

    // Update the bot's response
    const typingMessage = document.querySelector('.bot-message:last-child');
    typingMessage.textContent = advice;

  } catch (error) {
    console.error(error);
    const typingMessage = document.querySelector('.bot-message:last-child');
    typingMessage.textContent = 'An error occurred. Please try again.';
  }
}
