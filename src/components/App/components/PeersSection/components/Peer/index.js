import { CloseSquareOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";

function Peer({
  index,
  name,
  color,
  connectingPeer,
  deletePeer,
  clickPeer,
  isHideConnect,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const handleClick = (index) => {
    clickPeer(index);
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
  const handleConnect = (e) => {
    isConnected ? setIsConnected(false) : setIsConnected(true);
  };
  console.log(connectingPeer);
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
        style={{ fontSize: 24, color: color }}
        onClick={() => handleClick(index)}
      />
      <h5>Trương Đại Tín {name}</h5>
      {!isHideConnect ? (
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
            {isConnected ? "Disconnect" : "Connect"}
          </Button>
          {isConnected ? (
            <Button
              type="secondary"
              style={{ margin: 3 }}
              onClick={() => showModal()}
            >
              View History
            </Button>
          ) : null}
        </div>
      ) : null}
      <Modal
        title={connectingPeer ? connectingPeer.name.toString() : "modal"}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <CloseSquareOutlined
        onClick={() => {
          handleDelete(index);
        }}
      />
    </div>
  );
}

export default Peer;
