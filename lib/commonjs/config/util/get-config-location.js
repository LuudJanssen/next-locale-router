"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfigLocation = void 0;

require("core-js/modules/es.array.concat.js");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _findUp = _interopRequireDefault(require("find-up"));

var _configFilename = require("../../constants/config-filename.constant");

var _logger = require("../../logger");

var getConfigLocation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var location;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _findUp["default"])(_configFilename.CONFIG_FILENAME);

          case 2:
            location = _context.sent;

            if (!(typeof location === "undefined")) {
              _context.next = 5;
              break;
            }

            throw _logger.logger.error("Could not find a \"".concat(_configFilename.CONFIG_FILENAME, "\" config file in ").concat(process.cwd, " or any of its parent directories."));

          case 5:
            return _context.abrupt("return", location);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getConfigLocation() {
    return _ref.apply(this, arguments);
  };
}();

exports.getConfigLocation = getConfigLocation;