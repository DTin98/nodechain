var express = require("express");
var router = express.Router();
const Blockchain = require("../blockchain");
const blockchain = new Blockchain();

const peers = [{ name: 1, blockchain: new Blockchain() }];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect(`peer/${peers.length}`);
});
/* GET Peer */
router.get("/peer/:id", function (req, res, next) {
  console.log("req.params.id", req.params.id);
  console.log("peers[req.params.id - 1]", peers[req.params.id - 1]);
  if (!peers[req.params.id - 1] && req.params.id > 0)
    res.redirect(`/peer/${req.params.id - 1}`);
  res.render("index", {
    title: "Peer " + req.params.id,
    peers: peers,
    peer: peers[req.params.id - 1],
    index: req.params.id,
  });
});

/* ADD data of peer */
router.post("/peer/:id/addData", function (req, res, next) {
  peers[req.params.id - 1].blockchain.addBlock(req.body.data);
  res.redirect("back");
});

/* DELETE peer */
router.get("/peer/:id/delete", function (req, res, next) {
  peers.splice(req.params.id - 1, 1);
  res.redirect("back");
});

/* ADD Peer */
router.get("/addPeer", function (req, res, next) {
  console.log("addPeer");
  peers.push({ name: peers.length + 1, blockchain: new Blockchain() });
  peers.length > 1 ? res.redirect("back") : res.redirect("/");
});

/* GET Blockchain */
router.get("/blocks", function (req, res, next) {
  res.json(blockchain.chain);
});

/* ADD Block */
router.post("/mine", function (req, res, next) {
  const block = blockchain.addBlock(req.body.data);
  console.log(`New block added: ${block.toString()}`);
  res.redirect("/blocks");
  // p2pserver.syncChain();
});

module.exports = router;
