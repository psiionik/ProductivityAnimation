"use strict";

var _router = require("./Routes/router.js");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var express = require('express');

var app = express();
app.use('/api', (0, _router.routes)());
module.exports = app;