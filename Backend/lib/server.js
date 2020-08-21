"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _FirestoreInit = _interopRequireDefault(require("./Database/FirestoreInit"));

var http = require('http');

var app = require('./index');

var PORT = process.env.NODE_ENV === 'development' ? 3000 : 80;
(0, _FirestoreInit["default"])();
console.log("App started, listening at port ".concat(PORT));
http.createServer(app).listen(PORT);