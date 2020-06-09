import { Button, Input, Typography } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
const { Text } = Typography;

export default function Index({ block, index }) {
  const [data, setData] = useState(block.data);
  return (
    <block>
      <div>
        <Button style={{ backgroundColor: "#f5f6fa" }}>DATA</Button>
        <Input
          type="text"
          value={data}
          style={{ width: 650 }}
          onChange={(e) => {
            block.data = e.target.value;
            setData(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text strong style={{ margin: 5 }}>
          Previous hash:
        </Text>
        <Text style={{ color: "green", borderColor: "green" }}>
          {block.lastHash}
        </Text>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text strong style={{ margin: 5 }}>
          Hash:
        </Text>
        <Text style={{ color: "green", borderColor: "green" }} keyboard>
          {block.hash}
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: 10, fontSize: 24 }}>#{index}</span>
        <span style={{ marginRight: 10, fontSize: 18 }}>
          {new Date(block.timestamp).getHours()}
          {":"}
          {new Date(block.timestamp).getMinutes()}
          {":"}
          {new Date(block.timestamp).getSeconds()}{" "}
          {new Date(block.timestamp).getDate()}
          {"-"}
          {new Date(block.timestamp).getMonth()}
          {"-"}
          {new Date(block.timestamp).getFullYear()}{" "}
        </span>
        <Text keyboard style={{ marginRight: 10 }}>
          Nonce: {block.nonce}
        </Text>
      </div>
    </block>
  );
}
