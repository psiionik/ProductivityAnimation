"use strict";

var _router = require("./Routes/router.js");

if (process.send.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var express = require('express');

var PORT = 3000;
var app = express();
app.use('/api', (0, _router.routes)());
app.listen(PORT, function () {
  console.log("Example app listening at http://localhost:".concat(PORT));
});