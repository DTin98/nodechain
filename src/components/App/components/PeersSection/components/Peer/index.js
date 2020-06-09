import { CloseSquareOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";

function Peer({ peer, colorIcon = "black", onClick, deletePeer }) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleClick = (peer) => {
    onClick(peer);
  };
  const handleDelete = (index) => {
    deletePeer(index);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = (e) => {
    setModalVisible(false);
  };

  const handleCancel = (e) => {
    setModalVisible(false);
  };
  const handleConnect = (e) => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      }}
    >
      <UserOutlined
        style={{ fontSize: 24, color: colorIcon }}
        onClick={() => handleClick(peer)}
      />
      <h5>{peer.name}</h5>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          type="primary"
          style={{ margin: 3 }}
          onClick={() => handleConnect()}
        >
          Connect
        </Button>
        <Button
          type="secondary"
          style={{ margin: 3 }}
          onClick={() => showModal()}
        >
          View History
        </Button>
      </div>
      <Modal
        title="modal"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <CloseSquareOutlined onClick={() => {}} />
    </div>
  );
}

export default Peer;
