"use strict";

var _router = _interopRequireDefault(require("./Routes/router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var PORT = 3000;
var app = express();
app.use('/api', _router["default"]);
app.listen(PORT, function () {
  console.log("Example app listening at http://localhost:".concat(PORT));
});