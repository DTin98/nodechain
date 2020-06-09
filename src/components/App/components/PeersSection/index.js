import { Button } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import Peer from "./components/Peer";

export default function Index({ peers, onClickPeer }) {
  const [indexFocus, setIndexFocus] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        {peers.list.map((peer, index) => {
          if (indexFocus === index) {
            return (
              <Peer
                peer={peer}
                colorIcon="red"
                onClick={(peer) => {
                  onClickPeer(peer, index);
                  setIndexFocus(index);
                }}
              />
            );
          } else
            return (
              <Peer
                peer={peer}
                colorIcon="black"
                onClick={(peer) => {
                  onClickPeer(peer, index);
                  setIndexFocus(index);
                }}
              />
            );
        })}
      </div>
      <Button type="ghost" style={{ marginRight: 50 }} onClick={() => {}}>
        + ADD NEW PEER
      </Button>
    </div>
  );
}
