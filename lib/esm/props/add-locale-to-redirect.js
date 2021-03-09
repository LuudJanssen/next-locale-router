import _regeneratorRuntime from "@babel/runtime/regenerator";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import getConfig from "../config";
import { updateUrlWithRedirect } from "../strategy/util/url/update-url-with-redirect";
import { getLocaleRedirectByLocale } from "../util/get-locale-redirect-by-locale";
export var addLocaleToRedirect = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(redirect, locale) {
    var config, destination, redirectOptions, localeRedirect, newDestination;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getConfig();

          case 2:
            config = _context.sent;
            destination = redirect.destination, redirectOptions = _objectWithoutProperties(redirect, ["destination"]);
            localeRedirect = getLocaleRedirectByLocale(config.domains, locale);

            if (!(typeof localeRedirect === "undefined")) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", redirect);

          case 7:
            newDestination = updateUrlWithRedirect(destination, localeRedirect);
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