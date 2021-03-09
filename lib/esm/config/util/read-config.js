import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import path from "path";
import { logger } from "../../logger";
import { ConfigValidationError } from "./config-validation.error";
import { validateConfig } from "./validate-config";
var CONFIG_LOCATION = "./i18n.config.js";
export var readConfig = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(location) {
    var config;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logger.debug("Reading config from \"".concat(location, "\""));
            _context.prev = 1;
            _context.next = 4;
            return import(path.resolve(CONFIG_LOCATION));

          case 4:
            config = _context.sent;
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            logger.error("Unable to import config file from \"".concat(location, "\". Error:"), _context.t0);
            throw new ConfigValidationError(_context.t0);

          case 11:
            _context.prev = 11;
            validateConfig(config);
            return _context.abrupt("return", config);

          case 16:
            _context.prev = 16;
            _context.t1 = _context["catch"](11);

            if (_context.t1 instanceof ConfigValidationError) {
              logger.error(_context.t1);
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