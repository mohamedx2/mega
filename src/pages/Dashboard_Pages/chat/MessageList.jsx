// src/MessageList.js
import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';

const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-direction: ${props => (props.isUser ? 'row-reverse' : 'row')};
`;

const MessageContent = styled.div`
  max-width: 60%;
  margin-left: ${props => (props.isUser ? '10px' : '0')};
  margin-right: ${props => (props.isUser ? '0' : '10px')};
`;

const Message = styled.div`
  padding: 10px;
  background-color: ${props => (props.isUser ? '#007bff' : '#f1f1f1')};
  border-radius: 4px;
  color: ${props => (props.isUser ? '#fff' : '#000')};
`;

const MessageName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: ${props => (props.isUser ? '#fff' : '#000')};
`;

const MessageTime = styled.div`
  font-size: 12px;
  color: ${props => (props.isUser ? '#fff' : '#888')};
  margin-top: 5px;
  text-align: ${props => (props.isUser ? 'right' : 'left')};
`;

const MessageList = ({ messages }) => {
  return (
    <Messages>
      {messages.map((msg, index) => (
        <MessageContainer key={index} isUser={msg.user === 'me'}>
          <Avatar src={msg.avatar} />
          <MessageContent isUser={msg.user === 'me'}>
            <MessageName isUser={msg.user === 'me'}>{msg.name}</MessageName>
            <Message isUser={msg.user === 'me'}>{msg.text}</Message>
            <MessageTime isUser={msg.user === 'me'}>{msg.time}</MessageTime>
          </MessageContent>
        </MessageContainer>
      ))}
    </Messages>
  );
};

export default MessageList;
