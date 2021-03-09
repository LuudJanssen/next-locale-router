import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import chalk from "chalk";
import { format } from "url";
import { StrategyType } from "../strategy/strategy.type";
import { isDebugMode } from "../util/is-debug-mode";
var DATA_HEADER = "".concat(chalk.grey("╠══════"), " ").concat(chalk.green("DATA"), " ").concat(chalk.grey("══════"));
var DATA_PREFIX = chalk.grey("║ ");
var DATA_FOOTER = chalk.grey("╚══════════════════");
export var StrategyLogger = /*#__PURE__*/function () {
  function StrategyLogger(logger) {
    _classCallCheck(this, StrategyLogger);

    this.logger = logger;
  }

  _createClass(StrategyLogger, [{
    key: "log",
    value: function log(strategy, url) {
      if (!isDebugMode()) {
        return;
      }

      var formattedUrl = format(url);

      if (strategy.type === StrategyType.PASSTHROUGH) {
        this.logger.debug("".concat(strategy.type, "\t\t"), formattedUrl);
        return;
      }

      var tabs = strategy.type === StrategyType.RENDER ? "\t\t\t" : "\t";
      var logLine = this.logger.log("".concat(strategy.type).concat(tabs), formattedUrl);
      logLine.add("".concat(DATA_HEADER));
      var dataString = JSON.stringify(strategy.data, null, 2);
      var dataLines = dataString.split("\n");

      var _iterator = _createForOfIteratorHelper(dataLines),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var line = _step.value;
          logLine.add("".concat(DATA_PREFIX).concat(line));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      logLine.add(DATA_FOOTER);
      return;
    }
  }]);

  return StrategyLogger;
}();