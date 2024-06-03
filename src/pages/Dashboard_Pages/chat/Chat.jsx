// src/ChatApp.js
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import io from 'socket.io-client';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import styled from 'styled-components';
import Stopwatch from './Stopwatch';

const { Content } = Layout;

const ChatContainer = styled(Content)`
  display: flex;
  flex-direction: column;
  flex: 2; /* Take up 2/3 of the available space */
  height: 80vh;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StopwatchContainer = styled(Content)`
  flex: 1; /* Take up 1/3 of the available space */
  margin: 20px;
  
`;

const initialMessages = [
  { text: 'Hello!', user: 'other', name: 'John', avatar: 'https://i.pravatar.cc/40?img=1', time: new Date().toLocaleTimeString() },
  { text: 'Hi, how are you?', user: 'me', name: 'Me', avatar: 'https://i.pravatar.cc/40?img=2', time: new Date().toLocaleTimeString() },
  { text: 'I am good, thanks!', user: 'other', name: 'John', avatar: 'https://i.pravatar.cc/40?img=1', time: new Date().toLocaleTimeString() }
];

const ChatApp = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:5000'); // Replace with your server URL
    setSocket(newSocket);

    newSocket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => newSocket.close();
  }, [setSocket]);

  const handleSendMessage = (text) => {
    const message = {
      text,
      user: 'me',
      name: 'Me',
      avatar: 'https://i.pravatar.cc/40?img=2',
      time: new Date().toLocaleTimeString()
    };
    setMessages((prevMessages) => [...prevMessages, message]);
    if (socket) {
      socket.emit('message', message);
    }
  };

  return (
    <Layout style={{display:'flex',flexDirection:'row'}}>
      <ChatContainer>
        <MessageList messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </ChatContainer>
      <StopwatchContainer >
        <Stopwatch  />
      </StopwatchContainer>
    </Layout>
  );
};

export default ChatApp;
