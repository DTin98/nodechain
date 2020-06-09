/* eslint-disable no-dupe-class-members */
import Peer from "./peer";

class Peers {
  constructor() {
    this._list = [];
  }

  get list() {
    return this._list;
  }

  get length() {
    return this._list.length;
  }

  /**
   * @param {Number} index
   * @returns {Peer}
   */
  getPeer(index) {
    return this.list[index];
  }

  /**
   * @param {Peer} peer
   * @returns {Peer}
   */
  addPeerOneParam(peer) {
    this.list.push(peer);
    return peer;
  }

  addPeerNoParam() {
    const list_name = [
      "Doremon",
      "Nobita",
      "Chaien",
      "Xuka",
      "Xeko",
      "Doremi",
      "Nobito",
      "Tí",
      "Sửu",
      "Dần",
      "Mẹo",
      "Thìn",
      "Tỵ",
      "Ngọ",
      "Mùi",
      "Thân",
      "Dậu",
      "Tuất",
      "Hợi",
      "Songoku",
      "Vegeta",
      "Beerus",
      "Whis",
      "Buma",
      "Krilin",
      "Conan",
    ];
    const peer = new Peer(list_name[this.length] || "");
    return this.addPeer(peer);
  }

  addPeer() {
    if (arguments.length === 1) return this.addPeerOneParam(arguments[0]);
    else if (arguments.length === 0) return this.addPeerNoParam();
    else throw new Error("Number of params is so many");
  }
}

export default Peers;
