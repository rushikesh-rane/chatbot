import { useRef,useEffect } from "react";
import { ChatInput } from "./ChatInput";
import { Header } from "./Header";
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

export function ChatMessages({ chatMessages, isTyping }) {

  const chatMessagesRef = useRef(null);
  useEffect(() => {

    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div
      className="chat-messages-container"
      ref={chatMessagesRef}
    >
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}

      {isTyping && (
        <ChatMessage
          message="Typing..."
          sender="robot"
          className="typing-text"
        />
      )}
    </div>
  );
}

export default ChatMessages