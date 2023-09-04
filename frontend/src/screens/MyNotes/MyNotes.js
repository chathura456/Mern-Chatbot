/*
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatBot from 'react-simple-chatbot';
import { listNotes } from "../../actions/notesActions";
import './MyNotes.css';
import getSteps from './steps';

const MyNotes = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  const [chatbotKey, setChatbotKey] = useState(Date.now());
  const steps = getSteps(setChatbotKey);

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <div className="centered-container">
    <ChatBot key={chatbotKey} steps={steps} />
  </div>
  );
};

export default MyNotes;
*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { listNotes } from "../../actions/notesActions";
import ChatComponent from "./ChatComponent";
import './MyNotes.css';
import getSteps from './steps';

const MyNotes = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  const [chatbotKey, setChatbotKey] = useState(Date.now());
  const [chatSteps, setChatSteps] = useState(getSteps(setChatbotKey));
  const [chatMode, setChatMode] = useState('bot');

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
  

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch, navigate, userInfo]);

  return (
      <div className="centered-container">
        <button onClick={() => setChatMode(chatMode === 'bot' ? 'live' : 'bot')}>
          {(chatMode === 'bot' ? 'Bot Mode' : 'Live Chat')}
        </button>
        <br/>
        {chatMode === 'bot' ? (
          <ThemeProvider theme={theme}>
          <ChatBot key={chatbotKey} steps={chatSteps} /></ThemeProvider>
        ) : (
          <ChatComponent />
        )}
      </div>
  );
};

export default MyNotes;
