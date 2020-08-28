"use strict";

var http = require('http');

var app = require('./index');

var PORT = process.env.NODE_ENV === 'development' ? 3000 : 80;
console.log("App started, listening at port ".concat(PORT));
http.createServer(app).listen(PORT);