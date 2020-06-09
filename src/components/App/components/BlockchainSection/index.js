import React, { useState } from "react";
import "./block_chain_section.css";
import AddBlock from "./components/AddBlock";
import Block from "./components/Block";

export default function BlockchainSection({ isReRender, blockchain, onClick }) {
  const [add, setAdd] = useState(1);
  //set back value
  if (isReRender) isReRender = false;

  const handleClickAddBtn = (data) => {
    onClick(data);
    setAdd(add + 1);
  };

  return (
    <div className="blockchain-section">
      <h1 style={{ fontWeight: "bold" }}>BLOCKCHAIN</h1>
      {add
        ? blockchain.map((block, index) => (
            <Block key={block.hash} block={block} index={index} />
          ))
        : null}
      <AddBlock onClick={handleClickAddBtn} />
    </div>
  );
}
