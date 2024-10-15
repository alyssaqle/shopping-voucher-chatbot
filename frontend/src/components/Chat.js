// src/components/Chat.js

import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography, Paper, AppBar, Toolbar, Drawer } from '@mui/material';
import Navbar from './Navbar';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your shopping assistant. I'm here to help you find the best deals and discounts.",
    },
  ]);
  
  const [message, setMessage] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const sendMessage = async () => {
    if (!message.trim()) return; // Ignore empty messages

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: message },
    ]);

    setMessage(''); // Clear input field

    try {
      const response = await axios.post('http://localhost:5002/api/chat', {
        messages: [{ role: 'user', content: message }], // Make sure this structure matches your backend
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: response.data.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: "I'm sorry, I couldn't process your request." },
      ]);
    }
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar toggleDrawer={toggleDrawer} />
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Typography variant="h6" sx={{ padding: 2 }}>Menu Items</Typography>
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        {messages.map((msg, index) => (
          <Paper key={index} elevation={3} sx={{ marginBottom: 1, padding: 2, borderRadius: 2, backgroundColor: msg.role === 'user' ? '#e0f7fa' : '#ffffff' }}>
            <Typography variant="body1">{msg.content}</Typography>
          </Paper>
        ))}
      </Box>
      <Box sx={{ display: 'flex', padding: 1 }}>
        <TextField
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          sx={{ flex: 1, marginRight: 1 }}
        />
        <Button variant="contained" color="primary" onClick={sendMessage}>Send</Button>
      </Box>
    </Box>
  );
}

export default Chat;
