const express = require("express");
const router = express.Router();
//const db = require("../models");

router.get("/", (req, res, next) => {
  res.send({ id: 1, name: "tubagus" });
});

module.exports = router;
