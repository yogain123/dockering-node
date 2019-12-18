const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  console.log("Basic Route Hit");
  res.sendFile(`${__dirname}/public/index.html`);
});

router.get("/hello", function(req, res, next) {
  console.log("Basic Route Hit");
  res.json({
    name: "yogendra",
    age: 25,
    node_env: process.env.NODE_ENV,
    x_access_token: process.env.x_access_token
  });
});

module.exports = router;
