const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/chatController');

// Start a new chat session
//router.post('/start', startChat);

// Send a new message
//router.post('/message', sendMessage);

// Get chat history
//router.get('/:id/messages', getMessages);

// Close a chat session
//router.put('/:id/close', closeChat);

// Get all active chat sessions
//router.get('/activeChats', getActiveChats);

router.post('/send', sendMessage);
router.get('/messages', getMessages);


module.exports = router;
