import Peers from "./index";

// eslint-disable-next-line no-undef
const peers = new Peers();
peers.addPeer();
peers.addPeer().blockchain.addBlock("Hello");
export default peers;
