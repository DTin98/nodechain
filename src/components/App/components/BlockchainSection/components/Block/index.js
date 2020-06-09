import { Button, Input, Typography } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
const { Text } = Typography;

export default function Index({ block, index, edit }) {
  const [data, setData] = useState(block.data);
  const [previousHash, setPreviousHash] = useState(block.lastHash);
  const [hash, setHash] = useState(block.hash);
  return (
    <block>
      <div>
        <Button style={{ backgroundColor: "#f5f6fa" }}>DATA</Button>
        {edit ? (
          <Input
            type="text"
            value={data}
            style={{ width: 650, color: "black", borderColor: "red" }}
            onChange={(e) => {
              block.data = e.target.value;
              setData(e.target.value);
            }}
          />
        ) : (
          <Input
            disabled
            type="text"
            value={data}
            style={{ width: 650 }}
            onChange={(e) => {
              block.data = e.target.value;
              setData(e.target.value);
            }}
          />
        )}
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
        {edit ? (
          <Input
            style={{ color: "black", borderColor: "red" }}
            value={previousHash}
            onChange={(e) => {
              block.previousHash = e.target.value;
              setPreviousHash(e.target.value);
            }}
          />
        ) : (
          <Text style={{ color: "green", borderColor: "green" }}>
            {block.lastHash}
          </Text>
        )}
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
        {edit ? (
          <Input
            style={{ color: "black", borderColor: "red" }}
            value={hash}
            onChange={(e) => {
              block.hash = e.target.value;
              setHash(e.target.value);
            }}
          />
        ) : (
          <Text style={{ color: "green", borderColor: "green" }} keyboard>
            {block.hash}
          </Text>
        )}
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
