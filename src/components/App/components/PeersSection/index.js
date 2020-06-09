import { Button } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import Peer from "./components/Peer";

export default function Index({
  list_name,
  onClickPeer,
  onClickAddPeer,
  onClickDeletePeer,
  onClickConnectPeer,
  onClickDisconnectPeer,
}) {
  const [indexFocus, setIndexFocus] = useState(0);
  const [length, setLength] = useState(list_name.length);

  const handleClickAddPeer = () => {
    onClickAddPeer();
    setLength(list_name.length + 1);
  };

  const renderPeer = () => {
    if (!length) return;
    let color = "red";
    return list_name.map((name, index) => {
      let hideConnect = false;
      let hideHistory = false;
      if (indexFocus === index) {
        hideConnect = true;
        hideHistory = true;
        color = "red";
      } else {
        color = "black";
      }
      return (
        <Peer
          hideConnect={hideConnect}
          hideHistory={hideHistory}
          name={name}
          colorIcon={color}
          onClick={() => {
            onClickPeer(index);
            setIndexFocus(index);
          }}
          onClickDelete={() => {
            onClickDeletePeer(index);
            setLength(list_name.length);
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
