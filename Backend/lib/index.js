"use strict";

var _router = _interopRequireDefault(require("./Routes/router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var app = express();
var port = 3000;
app.use('/', _router["default"]);
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});