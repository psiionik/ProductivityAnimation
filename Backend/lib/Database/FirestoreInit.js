"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _admin = _interopRequireDefault(require("../Config/admin"));

var db = _admin["default"].firestore();

var testDBAdd = {
  firstName: 'testing',
  lastName: 'will work'
};

function addDataTest() {
  return _addDataTest.apply(this, arguments);
}

function _addDataTest() {
  _addDataTest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.collection('users').doc('alovelace').set(testDBAdd);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addDataTest.apply(this, arguments);
}

var _default = addDataTest;
exports["default"] = _default;