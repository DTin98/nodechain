import React, { useState } from "react";
import Blockchain from "../../blockchain";
import BlockchainList from "../BlockchainList";
import PeersSection from "../PeersSection";
import "./App.css";

function App() {
  const getBlockchain = (block_chain) => {
    setBlockChain(block_chain);
  };
  const _blockchain = new Blockchain();
  const [blockchain, setBlockChain] = useState(_blockchain);
  return (
    <div className="App">
      <PeersSection sendBlockchain={getBlockchain} />
      <BlockchainList blockchain={blockchain} />
    </div>
  );
}

export default App;
