import { EditTwoTone, SaveTwoTone } from "@ant-design/icons";
import React, { useState } from "react";
import "./block_chain_section.css";
import AddBlock from "./components/AddBlock";
import Block from "./components/Block";

export default function BlockchainSection({ isReRender, blockchain, onClick }) {
  const [add, setAdd] = useState(1);
  const [editBlock, setEditBlock] = useState(false);
  const [visibilityEditBlockBtn, setVisibilityEditBlockBtn] = useState(
    "hidden"
  );
  //set back value
  if (isReRender) isReRender = false;

  const handleClickAddBtn = (data) => {
    onClick(data);
    setAdd(add + 1);
  };

  const handleMouseMoveBlock = () => {
    setVisibilityEditBlockBtn("visible");
  };

  const handleMouseLeaveBlock = () => {
    setVisibilityEditBlockBtn("hidden");
  };

  return (
    <div className="blockchain-section">
      <h1 style={{ fontWeight: "bold" }}>BLOCKCHAIN</h1>
      {add
        ? blockchain.map((block, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              onMouseMove={handleMouseMoveBlock}
              onMouseLeave={handleMouseLeaveBlock}
            >
              {editBlock === index + 1 ? (
                <Block
                  key={block.hash}
                  block={block}
                  index={index}
                  edit={editBlock}
                />
              ) : (
                <Block key={block.hash} block={block} index={index} />
              )}
              {editBlock !== index + 1 ? (
                <EditTwoTone
                  style={{ fontSize: 40, visibility: visibilityEditBlockBtn }}
                  onClick={() => {
                    setEditBlock(index + 1);
                  }}
                />
              ) : (
                <SaveTwoTone
                  style={{ fontSize: 40, visibility: visibilityEditBlockBtn }}
                  onClick={() => {
                    setEditBlock(0);
                  }}
                />
              )}
            </div>
          ))
        : null}
      <AddBlock onClick={handleClickAddBtn} />
    </div>
  );
}
