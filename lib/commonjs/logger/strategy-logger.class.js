"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrategyLogger = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.regexp.exec.js");

var _chalk = _interopRequireDefault(require("chalk"));

var _url = require("url");

var _strategy = require("../strategy/strategy.type");

var _isDebugMode = require("../util/is-debug-mode");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DATA_HEADER = "".concat(_chalk["default"].grey("╠══════"), " ").concat(_chalk["default"].green("DATA"), " ").concat(_chalk["default"].grey("══════"));

var DATA_PREFIX = _chalk["default"].grey("║ ");

var DATA_FOOTER = _chalk["default"].grey("╚══════════════════");

var StrategyLogger = /*#__PURE__*/function () {
  function StrategyLogger(logger) {
    (0, _classCallCheck2["default"])(this, StrategyLogger);
    this.logger = logger;
  }

  (0, _createClass2["default"])(StrategyLogger, [{
    key: "log",
    value: function log(strategy, url) {
      if (!(0, _isDebugMode.isDebugMode)()) {
        return;
      }

      var formattedUrl = (0, _url.format)(url);

      if (strategy.type === _strategy.StrategyType.PASSTHROUGH) {
        this.logger.debug("".concat(strategy.type, "\t\t"), formattedUrl);
        return;
      }

      var tabs = strategy.type === _strategy.StrategyType.RENDER ? "\t\t\t" : "\t";
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

exports.StrategyLogger = StrategyLogger;