import React, { useState } from "react";
import "./block_chain_list.css";
import AddBlock from "./components/AddBlock";
import Block from "./components/Block";

export default function BlockchainSection({ blockchain }) {
  const [count, setCount] = useState(1);
  const handleClickAddBtn = (data) => {
    blockchain.addBlock(data);
    setCount(count + 1);
  };

  return (
    <div className="blockchain-section">
      <h1 style={{ fontWeight: "bold" }}>Blockchain</h1>
      {count
        ? blockchain.chain.map((block, index) => (
            <Block key={block.hash} block={block} index={index} />
          ))
        : null}
      <AddBlock onClick={handleClickAddBtn} />
    </div>
  );
}
