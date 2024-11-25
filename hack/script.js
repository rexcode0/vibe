const socket = io();

// Listen for messages
socket.on("message", (message) => {
    console.log("New message received:", message);
    const messageElement = document.createElement('div');
    messageElement.textContent = `${message}`;
    messageElement.classList.add('sent');
    chatBox.appendChild(messageElement);
});

// Send a test message




window.onload = function () {
    // Retrieve the user's name from sessionStorage (default to 'Guest' if not found)
    const userName = sessionStorage.getItem('username') || 'Guest';

    // Display the user's name in the chat interface
    document.getElementById('userGreeting').textContent = `Welcome, ${userName}!`;


    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const chatBox = document.getElementById('chatBox');


    chatBox.scrollTop = chatBox.scrollHeight;
};

// Function to convert text message to emojis (example: 'happy' becomes 😊)
function convertToEmoji(message) {
    message = message.toLowerCase();
    socket.on("message", (message) => {
        console.log("New message received:", message);
    }); const emojiDictionary = {
        "grinning": "😀",
        "happy": "😃",
        "smiling": "😄",
        "beaming": "😁",
        "laughing": "😆",
        "sweating": "😅",
        "joyful": "😂",
        "rolling": "🤣",
        "relieved": "😊",
        "angel": "😇",
        "simple": "🙂",
        "upsidedown": "🙃",
        "winking": "😉",
        "calm": "😌",
        "loving": "😍",
        "blowing": "😘",
        "content": "😙",
        "closedkiss": "😚",
        "tongueout": "😛",
        "squintingtongue": "😜",
        "winkingtongue": "😝",
        "zippermouth": "🤐",
        "silence": "😶",
        "neutral": "😐",
        "unamused": "😒",
        "thinking": "🤔",
        "raisedeyebrow": "🤨",
        "surprised": "😲",
        "confused": "😕",
        "worried": "😟",
        "sad": "😞",
        "crying": "😢",
        "tears": "😭",
        "frowning": "☹️",
        "screaming": "😱",
        "shocked": "😳",
        "sleeping": "😴",
        "sick": "🤢",
        "throwingup": "🤮",
        "cold": "🥶",
        "hot": "🥵",
        "mindblown": "🤯",
        "dizzy": "😵",
        "party": "🥳",
        "hugging": "🤗",
        "smirking": "😏",
        "angry": "😠",
        "fuming": "😤",
        "devil": "😈",
        "skull": "💀",
        "ghost": "👻",
        "robot": "🤖",
        "alien": "👽",
        "monkey": "🐵",
        "dog": "🐶",
        "cat": "🐱",
        "lion": "🦁",
        "tiger": "🐯",
        "unicorn": "🦄",
        "rainbow": "🌈",
        "sun": "☀️",
        "moon": "🌙",
        "cloud": "☁️",
        "lightning": "⚡",
        "fire": "🔥",
        "star": "⭐",
        "heart": "❤️",
        "brokenheart": "💔",
        "thumbsup": "👍",
        "thumbsdown": "👎",
        "clapping": "👏",
        "muscle": "💪",
        "praying": "🙏",
        "handshake": "🤝",
        "victory": "✌️",
        "okhand": "👌",
        "raisedhand": "✋",
        "writing": "✍️",
        "lightbulb": "💡",
        "book": "📖",
        "laptop": "💻",
        "phone": "📱",
        "envelope": "✉️",
        "clock": "⏰",
        "globe": "🌍",
        "car": "🚗",
        "bike": "🚲",
        "airplane": "✈️",
        "rocket": "🚀",
        "house": "🏠",
        "building": "🏢",
        "hospital": "🏥",
        "flag": "🏳️",
        "tree": "🌳",
        "flower": "🌸",
        "apple": "🍎",
        "pizza": "🍕",
        "burger": "🍔",
        "cake": "🎂",
        "coffee": "☕",
        "beer": "🍺",
        "wine": "🍷",
        "monkey": "🐵",
        "dog": "🐶",
        "cat": "🐱",
        "mouse": "🐭",
        "rabbit": "🐰",
        "fox": "🦊",
        "bear": "🐻",
        "panda": "🐼",
        "koala": "🐨",
        "lion": "🦁",
        "tiger": "🐯",
        "horse": "🐴",
        "cow": "🐮",
        "pig": "🐷",
        "frog": "🐸",
        "chicken": "🐔",
        "penguin": "🐧",
        "bird": "🐦",
        "fish": "🐟",
        "whale": "🐳",
        "octopus": "🐙",
        "butterfly": "🦋",
        "snail": "🐌",
        "crab": "🦀",
        "lobster": "🦞",
        "spider": "🕷️",
        "bee": "🐝",
        "elephant": "🐘",
        "zebra": "🦓",
        "giraffe": "🦒",
        "crocodile": "🐊",
        "india": "🇮🇳",
        "usa": "🇺🇸",
        "uk": "🇬🇧",
        "germany": "🇩🇪",
        "france": "🇫🇷",
        "canada": "🇨🇦",
        "japan": "🇯🇵",
        "italy": "🇮🇹",
        "brazil": "🇧🇷",
        "china": "🇨🇳",
        "russia": "🇷🇺",
        "southkorea": "🇰🇷",
        "australia": "🇦🇺",
        "mexico": "🇲🇽",
        "spain": "🇪🇸",
        "sun": "☀️",
        "moon": "🌙",
        "star": "⭐",
        "cloud": "☁️",
        "fire": "🔥",
        "lightning": "⚡",
        "snowflake": "❄️",
        "tree": "🌳",
        "house": "🏠",
        "building": "🏢",
        "hospital": "🏥",
        "car": "🚗",
        "bike": "🚲",
        "bus": "🚌",
        "train": "🚆",
        "airplane": "✈️",
        "rocket": "🚀",
        "laptop": "💻",
        "phone": "📱",
        "envelope": "✉️",
        "book": "📖",
        "clock": "⏰",
        "globe": "🌍",
        "anchor": "⚓",
        "key": "🔑",
        "lightbulb": "💡",
        "heart": "❤️",
        "brokenheart": "💔",
        "starofdavid": "✡️",
        "yinyang": "☯️",
        "peace": "☮️",
        "infinity": "♾️",
        "checkmark": "✔️",
        "crossmark": "❌",
        "questionmark": "❓",
        "exclamation": "❗",
        "recycling": "♻️",
        "warning": "⚠️",
        "musicnote": "🎵",
        "zodiacaries": "♈",
        "zodiactaurus": "♉",
        "zodiacgemini": "♊",
        "doctor": "👨‍⚕️",
        "nurse": "👩‍⚕️",
        "police": "👮",
        "teacher": "👩‍🏫",
        "chef": "👨‍🍳",
        "astronaut": "🧑‍🚀",
        "firefighter": "🧑‍🚒",
        "artist": "👩‍🎨",
        "pilot": "🧑‍✈️",
        "engineer": "👨‍🔧",
        "scientist": "👩‍🔬",
        "farmer": "👨‍🌾",
        "judge": "👩‍⚖️",
        "student": "👩‍🎓",
        "mechanic": "👨‍🔧"
    };

    // Replace words in the message with their corresponding emojis
    for (const [word, emoji] of Object.entries(emojiDictionary)) {

        const regex = new RegExp(`\\b${word}\\b`, 'g');  // Ensure whole word match
        message = message.replace(regex, emoji);
    }
    console.log(message);
    return message;
}

// Send message to the server when the 'Send' button is clicked
sendButton.addEventListener('click', function () {
    let message = messageInput.value;
    if (message.trim()) {
        // Convert the message to emojis
        let emojiMessage = convertToEmoji(message);
        const userName = sessionStorage.getItem("username");
        // Send the emoji-converted message to the server
        socket.emit("message", `${userName}: ${emojiMessage}`);

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

