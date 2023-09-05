
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import styled, { ThemeProvider } from 'styled-components';
import CustomLoadingComponent from '../../components/LoadingComponent';

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
        message: 'starting chat with user...',
        trigger: data.length > 0 ? '1' : 'userInput'
    };

    const chatSteps = data.map((item, index) => {
        let step = {
            id: (index + 1).toString(),
            trigger: data[index + 1] ? (index + 2).toString() : 'userInput'
        };

        if (item.sender === 'admin') {
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

    const sendMessageToBackend = async (message) => {
        try {
            const response = await axios.post('http://localhost:5000/api/chat/send', {
                sender: 'admin',
                message: message
            });

            if (response.status === 200) {
                console.log('Message sent successfully:', response.data);
            } else {
                console.log('Failed to send message:', response.data);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const userInputStep = {
        id: 'userInput',
        user: true,
        validator: (value) => {
            sendMessageToBackend(value);
            return true; // Always return true to continue the conversation
        },
        trigger: 'userInput'
    };

    const responseStep = {
        id: 'response',
        message: 'Message Received',
        trigger: 'userInput'
    };

    return [initialStep, ...chatSteps, userInputStep, responseStep];
};

function AdminChatComponent() {
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
            <ChatBot loadingComponent={<CustomLoadingComponent />} steps={mapChatDataToSteps(chatData)} />
        </ThemeProvider>
    ) : (
        <div>Loading chat...</div>
    );
}

export default AdminChatComponent;