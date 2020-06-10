import { Button } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import Peer from "./components/Peer";

export default function Index({
  listName,
  onClickPeer,
  onClickAddPeer,
  onClickDeletePeer,
  onClickConnectPeer,
  onClickDisconnectPeer,
}) {
  const [indexFocus, setIndexFocus] = useState(0);

  const handleClickAddPeer = () => {
    onClickAddPeer();
  };

  const renderPeer = () => {
    return listName.map((name, index) => {
      return (
        <Peer
          key={name}
          isConnected={false}
          hideConnect={indexFocus === index ? true : false}
          hideHistory={indexFocus === index ? true : false}
          name={name}
          colorIcon={indexFocus === index ? "blue" : "black"}
          onClick={() => {
            onClickPeer(index);
            setIndexFocus(index);
          }}
          onClickDelete={() => {
            onClickDeletePeer(index);
          }}
          onClickConnect={() => {
            onClickConnectPeer(indexFocus, index);
          }}
          onClickDisconnect={() => {
            onClickDisconnectPeer(indexFocus, index);
          }}
        />
      );
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>{renderPeer()}</div>
      <Button
        type="ghost"
        style={{ marginRight: 50 }}
        onClick={() => handleClickAddPeer()}
      >
        + ADD NEW PEER
      </Button>
    </div>
  );
}
