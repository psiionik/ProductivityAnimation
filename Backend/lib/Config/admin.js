"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

// const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS)
var serviceAccount = require('./FirebaseCredentials2.json');

_firebaseAdmin["default"].initializeApp({
  credential: _firebaseAdmin["default"].credential.cert(serviceAccount)
});

var _default = _firebaseAdmin["default"];
exports["default"] = _default;