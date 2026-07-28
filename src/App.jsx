import { useState}   from 'react'
import { ChatInput } from './components/ChatInput';
import { Header } from './components/Header';
import  ChatMessages  from './components/ChatMessages';
import './App.css'

import RobotImage from './assets/robot.png';
import UserImage from './assets/user.png';



function App() {
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([


    {

      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 'id2'

    }


  ]);



  return (

    <div className="app-container">

      <Header />

      <ChatMessages
        chatMessages={chatMessages}
        isTyping={isTyping}
      />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        isTyping={isTyping}
        setIsTyping={setIsTyping}
      />

    </div>

  );

}

export default App
