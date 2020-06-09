import React, { useState } from "react";
import peers from "./../../peers/instance";
import "./App.css";
import BlockchainList from "./components/BlockchainSection";
import PeersSection from "./components/PeersSection";

function App() {
  const handleClickPeer = (peer, index) => {
    setIndexFocus(index);
    setBlockChain(peer.blockchain);
  };
  const [blockchain, setBlockChain] = useState(peers.getPeer(0).blockchain);
  const [indexFocus, setIndexFocus] = useState(0);
  return (
    <div className="App">
      {indexFocus >= 0 ? (
        <PeersSection peers={peers} onClickPeer={handleClickPeer} />
      ) : null}
      <BlockchainList blockchain={blockchain} />
    </div>
  );
}

export default App;
