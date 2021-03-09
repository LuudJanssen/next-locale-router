"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _logger = require("../logger");

var _config = require("./config.class");

var _getConfigLocation = require("./util/get-config-location");

var _readConfig = require("./util/read-config");

var bootstrap = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var configLocation, config;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _getConfigLocation.getConfigLocation)();

          case 2:
            configLocation = _context.sent;

            if (!(typeof configLocation === "undefined")) {
              _context.next = 5;
              break;
            }

            throw _logger.logger.error("Could not find a config file in ".concat(process.cwd));

          case 5:
            _context.next = 7;
            return (0, _readConfig.readConfig)(configLocation);

          case 7:
            config = _context.sent;
            return _context.abrupt("return", new _config.Config(config));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function bootstrap() {
    return _ref.apply(this, arguments);
  };
}();

exports.bootstrap = bootstrap;