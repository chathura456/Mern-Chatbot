/*import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import socketIOClient from "socket.io-client";
import './AdminPanel.css';
const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);

const AdminPanel = () => {
    const [currentChat, setCurrentChat] = useState(null);
    const [steps, setSteps] = useState([]);

    const activeChats = [
      { userId: 'User1', lastMessage: 'Hello, I need help!' },
      { userId: 'User2', lastMessage: 'How do I use this feature?' },
      { userId: 'User3', lastMessage: 'I have a billing issue.' },
      // ... other chat sessions
  ];

    const joinChat = (userId) => {
        setCurrentChat(userId);
        // Fetch previous messages for this chat session and set them to steps
        // For now, we'll just simulate it
        setSteps([
            {
                id: 'welcome',
                message: `Chat with ${userId}`,
                trigger: 'user-input'
            },
            {
                id: 'user-input',
                user: true,
                trigger: 'admin-response'
            },
            {
                id: 'admin-response',
                message: 'How can I assist you today?',
                end: true
            }
        ]);
    };

    useEffect(() => {
        socket.on('receive_message', (data) => {
            // Handle the incoming message and update the chatbot steps
            const newStep = {
                id: `userMsg-${Date.now()}`,
                message: data.content,
                trigger: 'user-input'
            };
            setSteps(prevSteps => [...prevSteps, newStep]);
        });

        return () => socket.disconnect();  // Cleanup the socket connection on unmount
    }, []);

    return (
        <div className="admin-panel">
             <div className="sidebar">
            {activeChats.map((chat, index) => (
                <div key={index} className="chat-session" onClick={() => joinChat(chat.userId)}>
                    <h4>{chat.userId}</h4>
                    <p>{chat.lastMessage}</p>
                </div>
            ))}
        </div>
        <div className="chat-interface">
            {currentChat && <ChatBot steps={steps} />}
        </div>
        </div>
    );
};

export default AdminPanel;*/

import React from 'react';


const AdminPanel = () => {
   
    return (
        <div className="admin-panel">
            
        </div>
    );
};

export default AdminPanel;
