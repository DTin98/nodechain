import React, { useState } from "react";
import "./block_chain_list.css";
import AddBlock from "./components/AddBlock";
import Block from "./components/Block";

export default function BlockchainList({ blockchain }) {
  const [add, setAdd] = useState(1);
  const addBlock = (data) => {
    blockchain.addBlock(data);
    setAdd(add + 1);
  };

  return (
    <div className="blockchain-section">
      <h1>Blockchain</h1>
      {add
        ? blockchain.chain.map((block, index) => (
            <Block block={block} index={index} />
          ))
        : null}
      <AddBlock addBlock={addBlock} />
    </div>
  );
}
