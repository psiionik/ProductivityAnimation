"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _FirestoreMethods = _interopRequireDefault(require("../../Database/Users/FirestoreMethods"));

var _ApiMessages = _interopRequireDefault(require("../../Utils/ApiMessages"));

var UsersController = {
  /**
   * POST request api route for creating a new user.
   * This is gets an email and password in the request body and sends it to the method to interface with the database
   */
  createUser: function () {
    var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var resMessage;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _FirestoreMethods["default"].CreateUser(req.body);

            case 3:
              resMessage = _context.sent;

              if (resMessage === _ApiMessages["default"].POST_SUCCESS_MESSAGE) {
                res.status(201).send("Sucessfully created a new user!");
              } else {
                res.status(400).send("An error occured: wasn't able to find the created user");
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).send("An error occured: internal error");

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    function createUser(_x, _x2) {
      return _createUser.apply(this, arguments);
    }

    return createUser;
  }()
};
var _default = UsersController;
exports["default"] = _default;