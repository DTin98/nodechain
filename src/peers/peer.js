import Blockchain from "../blockchain";

class Peer {
  constructor(name = "", index, blockchain, connector) {
    this.index = index;
    this._name = name;
    this._blockchain = new Blockchain();
    this._list_connector = {};
  }

  get name() {
    return this._name;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    this._name = name;
  }

  get blockchain() {
    return this._blockchain;
  }

  /**
   * @param {Blockchain} blockchain
   */
  set setBlockchain(blockchain) {
    this.blockchain = blockchain;
  }

  /**
   * @returns {Array}
   */
  get listConnector() {
    return this._list_connector;
  }

  /**
   * @param {Number} index
   * @returns {Boolean}
   */
  getConnector(index) {
    return this.listConnector[index];
  }

  /**
   * @param {Peer} peer
   */
  addConnector(index) {
    this.listConnector[index] = true;
    return index;
  }

  /**
   * @param {Peer} peer
   */
  deleteConnector(index) {
    return (this.listConnector[index] = false);
  }

  /**
   * @param {Peer} peer
   */
  getBlockchainFrom(peer) {
    const lastedBlock = peer.blockchain.chain[peer.blockchain.chain.length - 1];
    //Received lasted block
    if (this.blockchain.isValidBlock(lastedBlock))
      this.blockchain.chain.push(lastedBlock);
    else this.blockchain.replaceChain(peer.blockchain.chain);
  }
}

export default Peer;
