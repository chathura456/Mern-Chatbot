
/*function ChatComponent() {
    const hardcodedSteps = [
        {
            id: '0',
            message: "Hello! This is the Admin of empower. How can I assist you today?",
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
            message: "I hope that helps! If you have any other questions or need further assistance with empower, please let me know.",
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
}

export default ChatComponent;*/
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
import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#158cba',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#158cba',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const UserBubbleContainer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
`;

const UserMessageBubble = styled.div`
  align-self: flex-end;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

const mapChatDataToSteps = (data) => {
    const initialStep = {
        id: '0',
        message: 'Loading previous chat...',
        trigger: '1'
    };

    const chatSteps = data.map((item, index) => {
        let step = {
            id: (index + 1).toString(),
            trigger: data[index + 1] ? (index + 2).toString() : 'userInput'
        };

        if (item.sender === 'user') {
            step.component = (
                <ChatContainer>
                    <UserBubbleContainer>
                        <UserMessageBubble>{item.message}</UserMessageBubble>
                    </UserBubbleContainer>
                </ChatContainer>
            );
        } else {
            step.message = item.message;
        }

        return step;
    });

    const userInputStep = {
        id: 'userInput',
        user: true,
        trigger: 'response'
    };

    const responseStep = {
        id: 'response',
        message: 'Thank you for your input. How can I assist you further?',
        trigger: 'userInput'
    };

    return [initialStep, ...chatSteps, userInputStep, responseStep];
};

function ChatComponent() {
    const [chatData, setChatData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/chat/messages')
            .then(response => response.json())
            .then(data => {
                setChatData(data);
                setIsDataLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching chat messages:', error);
            });
    }, []);

    return isDataLoaded ? (
        <ThemeProvider theme={theme}>
            <ChatBot steps={mapChatDataToSteps(chatData)} />
        </ThemeProvider>
    ) : (
        <div>Loading chat...</div>
    );
}

export default ChatComponent;
