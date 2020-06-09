import Blockchain from "../blockchain";

class Peer {
  constructor(name = "", blockchain, connector) {
    this._name = name;
    this._blockchain = new Blockchain();
    this._list_connector = [];
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
   * @returns {Peer}
   */
  getConnector(index) {
    return this.connector[index];
  }

  /**
   * @param {Peer} peer
   */
  addConnector(peer) {
    this.connector.push(peer);
    return peer;
  }

  /**
   * @param {Peer} peer
   */
  deleteConnector(index) {
    return this.connector.splice(index, 1);
  }
}

export default Peer;
