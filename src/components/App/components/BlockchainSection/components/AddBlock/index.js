import { Button } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import "./add_block.css";

export default function Index({ onClick }) {
  const [text, setText] = useState("");
  return (
    <div className="add-block">
      <div>
        <Button style={{ backgroundColor: "#f5f6fa" }}>DATA</Button>
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
        style={{ backgroundColor: "#d35400", marginTop: 20 }}
        onClick={() => {
          onClick(text);
        }}
      >
        + ADD NEW BLOCK
      </Button>
    </div>
  );
}
