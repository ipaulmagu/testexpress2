var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json({ msg: "user1, user2, ...", status: 250 }).status(201);
  // res.send("respond with a resource");
});

module.exports = router;
