"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _router = require("./Routes/router.js");

var _bodyParser = _interopRequireDefault(require("body-parser"));

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var express = require('express');

var app = express();
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].raw());
app.use('/api', (0, _router.routes)());
module.exports = app;