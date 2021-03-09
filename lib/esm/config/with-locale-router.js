import _regeneratorRuntime from "@babel/runtime/regenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { CONFIG_RUNTIME_KEY } from "../constants/config-runtime-key.constant";
import { bootstrap } from "./bootstrap";
export var withLocaleRouter = function withLocaleRouter() {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var _nextConfig$publicRun;

    var nextConfig,
        config,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nextConfig = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            _context.next = 3;
            return bootstrap();

          case 3:
            config = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, nextConfig), {}, {
              i18n: config.toNextI18nConfig(),
              publicRuntimeConfig: _objectSpread(_objectSpread({}, (_nextConfig$publicRun = nextConfig.publicRuntimeConfig) !== null && _nextConfig$publicRun !== void 0 ? _nextConfig$publicRun : {}), {}, _defineProperty({}, CONFIG_RUNTIME_KEY, config.toObject()))
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};