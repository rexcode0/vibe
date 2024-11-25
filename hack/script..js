const emojiDictionary = {
  happy: "😀",
  love: "❤️",
  sad: "😞",
  angry: "😠",
};

const convertToEmojis = (text) => {
  let result = text;
  for (const word in emojiDictionary) {
    const emoji = emojiDictionary[word];
    result = result.replace(new RegExp(`\\b${word}\\b`, "gi"), emoji);
  }
  return result;
};

const sendMessage = (text) => {
  const messageWithEmojis = convertToEmojis(text);
  socket.emit("sendMessage", messageWithEmojis);
};
