// src/MessageInput.js
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import { SendOutlined } from '@ant-design/icons';
const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <InputContainer>
      <Input
        value={message}
        onChange={e => setMessage(e.target.value)}
        onPressEnter={handleSend}
        placeholder="Type a message"
      />
      <Button type="primary" onClick={handleSend}>
        <span>Send <SendOutlined /></span>
      </Button>
    </InputContainer>
  );
};

export default MessageInput;
