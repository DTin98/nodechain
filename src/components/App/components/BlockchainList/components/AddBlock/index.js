import React, { useState } from "react";
import "./add_block.css";

export default function Index({ addBlock }) {
  const [text, setText] = useState("");
  return (
    <div className="add-block">
      <div>
        <span style={{ marginRight: 10 }}>DATA</span>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <button
        style={{ marginTop: 20 }}
        onClick={() => {
          addBlock(text);
        }}
      >
        + ADD NEW BLOCK
      </button>
    </div>
  );
}
