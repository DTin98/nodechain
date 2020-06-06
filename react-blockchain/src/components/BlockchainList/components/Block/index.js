import React, { useState } from "react";

export default function Index({ block, index }) {
  const [data, setData] = useState(block.data);
  return (
    <block>
      <div>
        <span>DATA</span>
        <input
          type="text"
          value={data}
          style={{ width: 600 }}
          onChange={(e) => {
            block.data = e.target.value;
            setData(e.target.value);
          }}
        />
      </div>
      <span>Previous Hash: {block.lastHash}</span>
      <span>Hash: {block.hash}</span>
      <div>
        <span style={{ marginRight: 10 }}>#{index}</span>
        <span style={{ marginRight: 10 }}>
          {new Date(block.timestamp).getHours()}
          {":"}
          {new Date(block.timestamp).getMinutes()}
          {":"}
          {new Date(block.timestamp).getSeconds()}{" "}
          {new Date(block.timestamp).getDay()}
          {"/"}
          {new Date(block.timestamp).getMonth()}
          {"/"}
          {new Date(block.timestamp).getFullYear()}{" "}
        </span>
        <span style={{ marginRight: 10 }}>Nonce: {block.nonce}</span>
      </div>
    </block>
  );
}
