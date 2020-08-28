"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _FirestoreInit = _interopRequireDefault(require("../FirestoreInit"));

var _ApiMessages = _interopRequireDefault(require("../../Utils/ApiMessages"));

var Users = {
  /** A reference to the collection of users, allows for keeping a reference for all the methods */
  collectionRef: _FirestoreInit["default"].collection('users'),
  CreateUser: function CreateUser(data) {
    var _this = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var email, password, dbRef;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = data.email;
              password = data.password;
              dbRef = _this.collectionRef.doc(email);
              _context.prev = 3;
              _context.next = 6;
              return dbRef.set({
                email: email,
                password: password
              });

            case 6:
              return _context.abrupt("return", "Some other message");

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](3);
              throw new Error('Could not create the user due to: ' + _context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 9]]);
    }))();
  }
};
var _default = Users;
exports["default"] = _default;