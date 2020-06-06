import React from "react";
import "./add_block.css";

export default function Index({ addBlock }) {
  return (
    <div className="add-block">
      <div>
        <span>DATA</span> <input type="text" value="" />
      </div>
      <button
        style={{ marginTop: 20 }}
        onClick={() => {
          addBlock("hello");
        }}
      >
        + ADD NEW BLOCK
      </button>
    </div>
  );
}
