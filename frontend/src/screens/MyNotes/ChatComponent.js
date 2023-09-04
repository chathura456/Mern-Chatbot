import React from 'react';
import ChatBot from 'react-simple-chatbot';

function ChatComponent() {
    const hardcodedSteps = [
        {
            id: '0',
            message: "Hello! This is the Admin of SellSync. How can I assist you today?",
            trigger: '1'
        },
        {
            id: '1',
            user: true,
            trigger: '2'
        },
        {
            id: '2',
            message: "Thank you for reaching out. Can you please provide more details about your query?",
            trigger: '3'
        },
        {
            id: '3',
            user: true,
            trigger: '4'
        },
        {
            id: '4',
            message: "I understand your concern. Let me check that for you.",
            trigger: '5'
        },
        {
            id: '5',
            delay: 2000, // simulate a delay in response to make it feel like the admin is checking something
            message: "Based on the information you provided, here's what I found...",
            trigger: '6'
        },
        {
            id: '6',
            user: true,
            trigger: '7'
        },
        {
            id: '7',
            message: "I hope that helps! If you have any other questions or need further assistance with SellSync, please let me know.",
            trigger: '8'
        },
        
        {
            id: '8',
            user: true,
            trigger: '9'
        },
        {
            id: '9',
            message: "Thank you for using SellSync. Have a great day!",
            end: true
        }
    ];
    
    
    return (
        <ChatBot steps={hardcodedSteps} />
    );

    /*
    const [chatSteps, setChatSteps] = useState([]);

    

    useEffect(() => {
        fetch('http://localhost:5000/api/chat/messages')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const formattedSteps = data.map((messageObj, index) => {
                    if (!messageObj || !messageObj.message) {
                        console.error("Invalid message object at index:", index, messageObj);
                        return null;
                    }
                    return {
                        id: index.toString(),
                        message: messageObj.message,
                        trigger: (index + 1).toString()
                    };
                }).filter(Boolean);  // This will filter out any null values
                

                // Add an end step
                formattedSteps.push({
                    id: (formattedSteps.length).toString(),
                    message: 'End of chat history.',
                    end: true
                });

                setChatSteps(formattedSteps);
            });
    }, []);

    return (
        <ChatBot steps={chatSteps} />
    );*/
}

export default ChatComponent;
/*
import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';

function ChatComponent() {
    const [chatSteps, setChatSteps] = useState([
        {
            id: '0',
            message: 'Loading chat history...',
            end: true
        }
    ]);
    

    useEffect(() => {
        // Fetch chat messages from the backend
        fetch('http://localhost:5000/api/chat/messages')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Check if data is an array
                if (!Array.isArray(data)) {
                    console.error("Data from backend is not an array:", data);
                    return;
                }

                // Format the chat messages for the ChatBot component
                const formattedSteps = data.map((messageObj, index) => {
                    if (!messageObj || typeof messageObj.message !== 'string') {
                        console.error("Invalid message object at index:", index, messageObj);
                        return null;
                    }
                    return {
                        id: index.toString(),
                        message: messageObj.message,
                        trigger: (index + 1).toString()
                    };
                }).filter(Boolean);// Filter out any null values

                // Add an end step to indicate the end of the chat history
                formattedSteps.push({
                    id: (formattedSteps.length).toString(),
                    message: 'End of chat history.',
                    end: true
                });

                // Update the state with the formatted chat steps
                setChatSteps(formattedSteps);
            })
            .catch(error => {
                console.error("Error fetching chat messages:", error);
            });
            console.log("Chat Steps:", chatSteps);
    }, []);

    return (
        <ChatBot steps={chatSteps} />
    );
}

export default ChatComponent;
*/