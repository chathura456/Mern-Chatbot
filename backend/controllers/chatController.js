const Chat = require('../models/chatModels');
const Message = require('../models/messageModel');

// Start a new chat session
/*exports.startChat = async (req, res) => {
  try {
    const { userId, adminId } = req.body;
    const chat = new Chat({ userId, adminId });
    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
*/
// Send a new message in a chat session
/*
exports.sendMessage = async (req, res) => {
  try {
    const { chatId, senderId, content } = req.body;
    const message = new Message({ chatId, senderId, content });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};*/


// Fetch chat history for a particular chat session
/*
exports.getMessages = async (req, res) => {
  try {
    const chatId = req.params.id;
    const messages = await Message.find({ chatId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};*/

// End a chat session
/*
exports.closeChat = async (req, res) => {
  try {
    const chatId = req.params.id;
    const chat = await Chat.findByIdAndUpdate(chatId, { isOpen: false }, { new: true });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Fetch all active chat sessions
exports.getActiveChats = async (req, res) => {
  try {
    const chats = await Chat.find({ isOpen: true });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
*/
exports.sendMessage = async (req, res) => {
  const { sender, message } = req.body;

  const chat = new Chat({
      sender,
      message,
      timestamp: new Date()
  });

  try {
      const savedChat = await chat.save();
      res.status(200).send(savedChat);
  } catch (err) {
      console.error("Error saving chat:", err);
      res.status(500).send(err);
  }
};

exports.getMessages = async (req, res) => {
  try {
      const messages = await Chat.find({});
      res.status(200).send(messages);
  } catch (err) {
      console.error("Error retrieving messages:", err);
      res.status(500).send(err);
  }
};



