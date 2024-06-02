import { useState } from 'react';
import { Button, Modal, Input, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import axios from 'axios';

export default function AddUserButton() {
  const [modal2Open, setModal2Open] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOk = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in local storage
      const response = await axios.post(
        'https://backray.onrender.com/join',
        { receiver: email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      message.success('Join code sent successfully!');
      setModal2Open(false);
      setEmail(''); // Clear the email input after submission
    } catch (error) {
      message.error(error.response?.data?.message || 'Failed to send join code.');
      console.error('Error sending join code:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Add user with email
      </Button>
      <Modal
        title="Add user with email"
        centered
        open={modal2Open}
        onOk={handleOk}
        onCancel={() => setModal2Open(false)}
        confirmLoading={loading}
      >
        <Input
          size="large"
          placeholder="Enter your email"
          prefix={<MailOutlined />}
          value={email}
          onChange={handleEmailChange}
        />
      </Modal>
    </>
  );
}
