import React, { useState } from "react";

function Messages() {
  const messages = [
    "Your voice is my favorite sound",
    "So far, every moment we've spent together has been awesome. But I promise you, that the best is yet to come.",
    "If only you knew how much those little moments with you matter to me.",
    "You have no idea how much my heart races when I see you",
    "I love when I catch you looking at me",
    "Somehow just hearing your name gives me butterflies.",
    "Cuddling with you would be perfect right now.",
    "You make my heart melt!",
    "Every moment away from you feels like a lifetime.",
    "I love you more than words can say",
  ];

  const [randomMessage, setRandomMessage] = useState("");

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  const loadRandomMessage = () => {
    const randomMessage = getRandomMessage();
    setRandomMessage(randomMessage);
    alert(randomMessage);
  };

  return (
    <div>
      <button onClick={loadRandomMessage}>Click me ;)</button>
      <p>{randomMessage}</p>
    </div>
  );
}

export default Messages;
