import React, { useState } from "react";
import Blockchain from "../../../../blockchain";
import Peer from "./components/Peer";

export default function Index({ sendBlockchain }) {
  const clickPeer = (index) => {
    // sendBlockchain(peers[index].blockchain);
    setFocusOnPeer(index);
  };

  const addPeer = () => {
    const newPeers = [
      ...peers,
      { name: peers.length + 1, blockchain: new Blockchain() },
    ];
    setPeers(newPeers);
  };

  const deletePeer = (index) => {
    peers.splice(index, 1);
    const newPeers = [...peers];
    setPeers(newPeers);
    if (focusOnPeer === index) setFocusOnPeer(focusOnPeer - 1);
  };

  const [peers, setPeers] = useState([
    { name: 0, blockchain: new Blockchain() },
  ]);
  const [focusOnPeer, setFocusOnPeer] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        {peers.map((peer, index) => {
          if (focusOnPeer === index) {
            sendBlockchain(peers[index].blockchain);
            return (
              <Peer
                color="Red"
                index={index}
                name={peer.name}
                deletePeer={deletePeer}
                clickPeer={clickPeer}
                isHideConnect
                connectingPeer={peers[focusOnPeer]}
              />
            );
          } else
            return (
              <Peer
                color="Black"
                index={index}
                name={peer.name}
                deletePeer={deletePeer}
                clickPeer={clickPeer}
                connectingPeer={peers[focusOnPeer]}
              />
            );
        })}
      </div>
      <button
        style={{ marginRight: 50 }}
        onClick={() => {
          addPeer();
        }}
      >
        Add peer
      </button>
    </div>
  );
}
