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
          <ChatBot key={chatbotKey} steps={chatSteps} />
        ) : (
          <ChatComponent />
        )}
      </div>
  );
};

export default MyNotes;
