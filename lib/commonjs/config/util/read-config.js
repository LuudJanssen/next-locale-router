"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readConfig = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _logger = require("../../logger");

var _configValidation = require("./config-validation.error");

var _validateConfig = require("./validate-config");

var CONFIG_LOCATION = "./i18n.config.js";

var readConfig = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(location) {
    var config;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _logger.logger.debug("Reading config from \"".concat(location, "\""));

            _context.prev = 1;
            _context.next = 4;
            return Promise.resolve("".concat(_path["default"].resolve(CONFIG_LOCATION))).then(function (s) {
              return (0, _interopRequireWildcard2["default"])(require(s));
            });

          case 4:
            config = _context.sent;
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);

            _logger.logger.error("Unable to import config file from \"".concat(location, "\". Error:"), _context.t0);

            throw new _configValidation.ConfigValidationError(_context.t0);

          case 11:
            _context.prev = 11;
            (0, _validateConfig.validateConfig)(config);
            return _context.abrupt("return", config);

          case 16:
            _context.prev = 16;
            _context.t1 = _context["catch"](11);

            if (_context.t1 instanceof _configValidation.ConfigValidationError) {
              _logger.logger.error(_context.t1);
            }

            throw _context.t1;

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7], [11, 16]]);
  }));

  return function readConfig(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.readConfig = readConfig;