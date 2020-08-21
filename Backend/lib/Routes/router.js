"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.routes = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _express = require("express");

var _axios = _interopRequireDefault(require("axios"));

var debug = require('debug')('express:router');

var BASE_URL = "https://cat-fact.herokuapp.com";

var routes = function routes() {
  var apiRoutes = (0, _express.Router)();
  apiRoutes.get('/', function (req, res) {
    debug(req.method + ' ' + req.url);
    res.send(process.env.DEBUG);
  });
  apiRoutes.get('/test', function (req, res) {
    res.send('Hello World');
  });
  apiRoutes.get('/new', function (req, res) {
    res.send('New page on hot reload');
  });
  apiRoutes.get('/user', function (req, res) {
    var getData = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios["default"].get(BASE_URL + '/facts').then(function (response) {
                  return response.data;
                });

              case 2:
                data = _context.sent;
                res.send((0, _stringify["default"])(data));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getData() {
        return _ref.apply(this, arguments);
      };
    }();

    getData();
  });
  return apiRoutes;
};

exports.routes = routes;