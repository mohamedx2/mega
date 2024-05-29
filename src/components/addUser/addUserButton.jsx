import { useState } from 'react';
import { Button, Modal ,Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';

export default function AddUserButton() {

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Add user with email
      </Button>
      <Modal
        title="Add user weth email"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Input size="large" placeholder="enter your email" prefix={<MailOutlined />} />
      </Modal>
    </>
  );
};

