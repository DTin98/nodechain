import React, { useState } from "react";
import peers from "./../../peers/instance";
import "./App.css";
import BlockchainSection from "./components/BlockchainSection";
import PeersSection from "./components/PeersSection";

function App() {
  const [index, setIndex] = useState(0);
  const [listName, setListName] = useState(peers.getListName());
  const [ReRender, setReRender] = useState(false);

  const handleClickPeer = (index) => {
    setIndex(index);
  };

  const handleClickDeletePeer = (index) => {
    peers.length !== 1 ? peers.deletePeer(index) : console.log("cannot delete");
    setListName(peers.getListName());
  };

  const handleClickAddPeer = () => {
    peers.addPeer();
    setListName(peers.getListName());
  };

  const handleClickConnectPeer = (indexFocusPeer, indexClickPeer) => {
    peers.list[indexClickPeer].addConnector(indexFocusPeer);
    peers.list[indexFocusPeer].addConnector(indexClickPeer);

    peers.list[indexFocusPeer].getBlockchainFrom(peers.list[indexClickPeer]);
    peers.list[indexClickPeer].getBlockchainFrom(peers.list[indexFocusPeer]);

    setReRender(true);
  };

  const handleClickDisconnectPeer = (indexFocusPeer, indexClickPeer) => {
    peers.list[indexClickPeer].deleteConnector(indexFocusPeer);
    peers.list[indexFocusPeer].deleteConnector(indexClickPeer);
  };

  const handleClickAddBlock = (data) => {
    peers.getPeer(index).blockchain.addBlock(data);
  };

  return (
    <div className="App">
      {
        <PeersSection
          listName={listName}
          onClickPeer={handleClickPeer}
          onClickDeletePeer={handleClickDeletePeer}
          onClickAddPeer={handleClickAddPeer}
          onClickConnectPeer={handleClickConnectPeer}
          onClickDisconnectPeer={handleClickDisconnectPeer}
        />
      }
      <BlockchainSection
        isReRender={ReRender}
        blockchain={peers.getPeer(index).blockchain.chain}
        onClick={handleClickAddBlock}
      />
    </div>
  );
}

export default App;
