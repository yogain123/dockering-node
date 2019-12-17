const express = require('express');
const router = express.Router();

router.get("/", function (req, res, next) {
  console.log("Basic Route Hit");
  res.sendFile(`${__dirname}/index.html`);
})

module.exports = router;