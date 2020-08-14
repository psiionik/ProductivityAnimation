"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var routes = (0, _express.Router)();
routes.get('/', function (req, res) {
  res.send("Hello Wrold");
});
var _default = routes; // export const router = () => {
//     const apiRoutes = Router()
//     apiRoutes.get('/', (req, res) => {
//         res.send("Testing withing router")
//     })
//     return apiRoutes
// };

exports["default"] = _default;