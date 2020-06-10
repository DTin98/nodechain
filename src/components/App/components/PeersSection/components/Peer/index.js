import { CloseSquareOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";

function Peer({
  name,
  isConnected = false,
  colorIcon = "black",
  hideConnect = false,
  hideHistory = false,
  onClick,
  onClickDelete,
  onClickConnect,
  onClickDisconnect,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState(isConnected ? "Disconnect" : "Connect");

  const handleClick = () => {
    onClick();
  };
  const handleClickDelete = () => {
    onClickDelete();
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
  const handleConnect = () => {
    if (state === "Connect") {
      onClickConnect();
      setState("Disconnect");
    } else {
      onClickDisconnect();
      setState("Connect");
    }
  };

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
        onClick={() => handleClick()}
      />
      <h5>{name}</h5>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {hideConnect ? null : (
          <Button
            danger={state === "Disconnect" ? true : false}
            type="primary"
            style={{ margin: 3 }}
            onClick={() => handleConnect()}
          >
            {state}
          </Button>
        )}
        {hideHistory ? null : (
          <Button
            type="secondary"
            style={{ margin: 3 }}
            onClick={() => showModal()}
          >
            View History
          </Button>
        )}
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
      <CloseSquareOutlined onClick={() => handleClickDelete()} />
    </div>
  );
}

export default Peer;
