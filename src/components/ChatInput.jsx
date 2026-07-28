import { useRef, useState } from "react";

import { Chatbot } from 'supersimpledev';
import './ChatInput.css'

export function ChatInput({
  chatMessages,
  setChatMessages,
  setIsTyping
}) {
  const inputRef = useRef(null);
  const [inputText, setInputText] = useState('')

  function saveInputText(event) {

    setInputText(event.target.value);

  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  function sendMessage() {

    const userMessage = inputText.trim();

    if (!userMessage) {
      return;
    }
    const newChatMessages = [
      ...chatMessages,
      {
        message: userMessage,
        sender: 'user',
        id: crypto.randomUUID()
      }

    ]
    setChatMessages(newChatMessages);

    setIsTyping(true);

    setTimeout(() => {
      const response = Chatbot.getResponse(userMessage);
      setChatMessages((currentMessages) => [
        ...currentMessages,
        {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);

      setIsTyping(false);
    }, 1000);


    setInputText('');

    inputRef.current.focus();
  }

  return (
    <div className="chat-input-container">
      <input
        ref={inputRef}
        placeholder="Send a message to ChatBot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
        className="chat-input"

      />
      <button
        disabled={inputText.trim() === ''}
        onClick={sendMessage}
        className="send-button "
      >Send</button>
    </div>
  );
}