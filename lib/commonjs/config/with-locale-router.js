"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLocaleRouter = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _configRuntimeKey = require("../constants/config-runtime-key.constant");

var _bootstrap = require("./bootstrap");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var withLocaleRouter = function withLocaleRouter() {
  return /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _nextConfig$publicRun;

    var nextConfig,
        config,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nextConfig = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            _context.next = 3;
            return (0, _bootstrap.bootstrap)();

          case 3:
            config = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, nextConfig), {}, {
              i18n: config.toNextI18nConfig(),
              publicRuntimeConfig: _objectSpread(_objectSpread({}, (_nextConfig$publicRun = nextConfig.publicRuntimeConfig) !== null && _nextConfig$publicRun !== void 0 ? _nextConfig$publicRun : {}), {}, (0, _defineProperty2["default"])({}, _configRuntimeKey.CONFIG_RUNTIME_KEY, config.toObject()))
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

exports.withLocaleRouter = withLocaleRouter;