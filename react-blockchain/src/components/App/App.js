import React, { useState } from "react";
import Blockchain from "../../blockchain";
import "./App.css";
import BlockchainList from "./components/BlockchainList";
import PeersSection from "./components/PeersSection";

function App() {
  const getBlockchain = (block_chain) => {
    setBlockChain(block_chain);
  };
  const _blockchain = new Blockchain();
  _blockchain.addBlock();
  const [blockchain, setBlockChain] = useState(_blockchain);
  return (
    <div className="App">
      <PeersSection sendBlockchain={getBlockchain} />
      <BlockchainList blockchain={blockchain} />
    </div>
  );
}

export default App;
