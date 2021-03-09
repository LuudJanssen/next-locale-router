import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import findUp from "find-up";
import { CONFIG_FILENAME } from "../../constants/config-filename.constant";
import { logger } from "../../logger";
export var getConfigLocation = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var location;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return findUp(CONFIG_FILENAME);

          case 2:
            location = _context.sent;

            if (!(typeof location === "undefined")) {
              _context.next = 5;
              break;
            }

            throw logger.error("Could not find a \"".concat(CONFIG_FILENAME, "\" config file in ").concat(process.cwd, " or any of its parent directories."));

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