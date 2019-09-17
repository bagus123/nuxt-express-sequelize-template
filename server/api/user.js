const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let users = await MODELS.User.findAll()
    res.send(users);
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
});

module.exports = router;
