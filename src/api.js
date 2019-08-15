const express = require("express");
const serverless = require("serverless-http");

const app = express();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

const router = express.Router();
router.get("/", (req, res) => {
  res.json({ msg: `Hello World :` + new Date() });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
