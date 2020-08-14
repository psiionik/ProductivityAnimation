"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = "https://cat-fact.herokuapp.com";
var routes = (0, _express.Router)();
routes.get('/test', function (req, res) {
  res.send('Hello World');
});
routes.get('/new', function (req, res) {
  res.send('New page on hot reload');
});
routes.get('/user', function (req, res) {
  var promise_data = _axios["default"].get(BASE_URL + '/facts').then(function (response) {
    return Promise.resolve(response.data);
  });

  promise_data.then(function (value) {
    console.log(value);
    res.send(JSON.stringify(value));
  });
});
var _default = routes; // export const router = () => {
//     const apiRoutes = Router()
//     apiRoutes.get('/', (req, res) => {
//         res.send("Testing withing router")
//     })
//     return apiRoutes
// };

exports["default"] = _default;