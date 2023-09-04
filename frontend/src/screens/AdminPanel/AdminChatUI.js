import React from 'react';
import './AdminChatInterface.css';

const AdminChatInterface = ({ selectedChat = {} }) =>  {
    if (!selectedChat) {
        return <div className="admin-chat-placeholder">Select a chat to start the conversation</div>;
    }

    return (
        <div className="admin-chat-container">
            <div className="admin-chat-header">
                Chat with {selectedChat.userName}
            </div>
            <div className="admin-chat-messages">
                {selectedChat.messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender === 'admin' ? 'admin-message' : 'user-message'}`}>
                        {message.content}
                    </div>
                ))}
            </div>
            <div className="admin-chat-input-container">
                <input type="text" placeholder="Type your message..." className="admin-chat-input" />
                <button className="admin-chat-send-btn">Send</button>
            </div>
        </div>
    );
};

export default AdminChatInterface;
