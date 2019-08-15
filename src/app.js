var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const serverless = require("serverless-http");
var indexRouter = require("../routes/index");
var usersRouter = require("../routes/users");

var app = express();
let port = 80;
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/.netlify/functions/app", indexRouter);
app.use("/.netlify/functions/app/users", usersRouter);
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.listen(port, (a, b, c) => {
  console.log(`[Init] App listening on port ${port}!`);
  // console.log(`a:${a} - b:${b} - c:${c}`);
});

module.exports.handler = serverless(app);
