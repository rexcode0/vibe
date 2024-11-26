const socket = io();
const user = sessionStorage.getItem("user");
const receiver = sessionStorage.getItem("receiver");
const chatType = sessionStorage.getItem("chat");
const messageBox = document.querySelector("#chatBox");
socket.on("message", (message) => {
    

    const messageElement = document.createElement('div');
    const nameElement = document.createElement('strong');

    if (chatType === "group") {
        if (message[0] == user) {
           
            nameElement.textContent = message[0]; // user name
            messageElement.textContent = `: ${message[2]}`;
            messageElement.classList.add('sent');
            messageElement.prepend(nameElement); // Prepend the name to the message
            messageBox.appendChild(messageElement);
        }

        else {
           
            nameElement.textContent = message[0]; // user name in group chat
            messageElement.classList.add('received');
            messageElement.textContent = `: ${message[2]}`;
            messageElement.prepend(nameElement); // Prepend the name to the message
            messageBox.appendChild(messageElement);

        }
    } else if (message[3] == 'private') {
        if (message[1] === user) {
            nameElement.textContent = message[0]; // user name
            messageElement.textContent = `: ${message[2]}`;
            messageElement.classList.add('received');
            messageElement.prepend(nameElement); // Prepend the name to the message
            messageBox.appendChild(messageElement);
        }
        if (message[0] == user) {
            nameElement.textContent = message[0]; // user name
            messageElement.textContent = `: ${message[2]}`;
            messageElement.classList.add('sent');
            messageElement.prepend(nameElement); // Prepend the name to the message
            messageBox.appendChild(messageElement);
        }
    }
}
);

// Send a test message
window.onload = function () {

    document.getElementById('userGreeting').textContent = `Welcome, ${user}!`;

    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const message = document.getElementById('message');

};

// Send message to the server when the 'Send' button is clicked
sendButton.addEventListener('click', function () {
    let message = messageInput.value;
    if (message.trim()) {
        socket.emit("message", [user, receiver, message, chatType]);

        messageInput.value = '';
    }
});

// Allow sending messages with the 'Enter' key
messageInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
