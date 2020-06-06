var express = require("express");
var router = express.Router();
const P2pserver = require("../p2p-server");
const Blockchain = require("../blockchain");
const p2pserver = new P2pserver();
const blockchain = new Blockchain();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Block Chain Demo" });
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
