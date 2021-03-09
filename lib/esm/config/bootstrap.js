import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { logger } from "../logger";
import { Config } from "./config.class";
import { getConfigLocation } from "./util/get-config-location";
import { readConfig } from "./util/read-config";
export var bootstrap = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var configLocation, config;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getConfigLocation();

          case 2:
            configLocation = _context.sent;

            if (!(typeof configLocation === "undefined")) {
              _context.next = 5;
              break;
            }

            throw logger.error("Could not find a config file in ".concat(process.cwd));

          case 5:
            _context.next = 7;
            return readConfig(configLocation);

          case 7:
            config = _context.sent;
            return _context.abrupt("return", new Config(config));

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