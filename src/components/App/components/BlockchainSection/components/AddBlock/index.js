import { Button } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import "./add_block.css";

export default function Index({ onClick }) {
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
      <Button
        type="primary"
        style={{ marginTop: 20 }}
        onClick={() => {
          onClick(text);
        }}
      >
        + ADD NEW BLOCK
      </Button>
    </div>
  );
}
