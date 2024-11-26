const socket = io();
const sender = sessionStorage.getItem("sender");
const reciever = sessionStorage.getItem("reciever");
// Listen for messages
socket.on("message", (message) => {

    if (message[1] === sender) {
        console.log("New message received:", message);
        const messageElement = document.createElement('div');
        messageElement.textContent = `${message[0]}: ${message[2]}`;
        messageElement.classList.add('received');
        chatBox.appendChild(messageElement);
    }
    if(message[0]===sender)
    {
        console.log("New message received:", message);
        const messageElement = document.createElement('div');
        messageElement.textContent = `${message[0]}: ${message[2]}`;
        messageElement.classList.add('sent');
        chatBox.appendChild(messageElement);
    }
});

// Send a test message


window.onload = function () {
    // Retrieve the user's name from sessionStorage (default to 'Guest' if not found)
    const userName = sessionStorage.getItem('sender') || 'Guest';

    // Display the user's name in the chat interface
    document.getElementById('userGreeting').textContent = `Welcome, ${userName}!`;


    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const chatBox = document.getElementById('chatBox');


    chatBox.scrollTop = chatBox.scrollHeight;
};



// Send message to the server when the 'Send' button is clicked
sendButton.addEventListener('click', function () {
    let message = messageInput.value;
    if (message.trim()) {
        // Convert the message to emojis


        // Send the emoji-converted message to the server
        socket.emit("message", [sender, reciever, message]);

        // Scroll chat box to the bottom when a new message is added
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear the input after sending the message
        messageInput.value = '';
    }
});

// Allow sending messages with the 'Enter' key
messageInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        console.log("enter pressed");
        sendButton.click();
    }
});

