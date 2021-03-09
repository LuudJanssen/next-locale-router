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
exports.addLocaleToRedirect = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = _interopRequireDefault(require("../config"));

var _updateUrlWithRedirect = require("../strategy/util/url/update-url-with-redirect");

var _getLocaleRedirectByLocale = require("../util/get-locale-redirect-by-locale");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var addLocaleToRedirect = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(redirect, locale) {
    var config, destination, redirectOptions, localeRedirect, newDestination;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _config["default"])();

          case 2:
            config = _context.sent;
            destination = redirect.destination, redirectOptions = (0, _objectWithoutProperties2["default"])(redirect, ["destination"]);
            localeRedirect = (0, _getLocaleRedirectByLocale.getLocaleRedirectByLocale)(config.domains, locale);

            if (!(typeof localeRedirect === "undefined")) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", redirect);

          case 7:
            newDestination = (0, _updateUrlWithRedirect.updateUrlWithRedirect)(destination, localeRedirect);
            return _context.abrupt("return", _objectSpread({
              destination: newDestination
            }, redirectOptions));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addLocaleToRedirect(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addLocaleToRedirect = addLocaleToRedirect;