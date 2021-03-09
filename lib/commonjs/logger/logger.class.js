"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.pad-start.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.function.bind.js");

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _chalk = _interopRequireDefault(require("chalk"));

var Logger = /*#__PURE__*/function () {
  function Logger() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[next-i18n-router] \t";
    (0, _classCallCheck2["default"])(this, Logger);
    this.prefix = prefix;
  }

  (0, _createClass2["default"])(Logger, [{
    key: "log",
    value: function log(message) {
      var _console;

      for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        optionalParams[_key - 1] = arguments[_key];
      }

      (_console = console).log.apply(_console, [_chalk["default"].cyan(this.prefix), message].concat(optionalParams));

      return this.createLogline("log");
    }
  }, {
    key: "debug",
    value: function debug(message) {
      var _console2;

      for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        optionalParams[_key2 - 1] = arguments[_key2];
      }

      var params = [message].concat(optionalParams).map(function (param) {
        if (typeof param === "string") {
          return _chalk["default"].grey(param);
        }

        return param;
      });

      (_console2 = console).debug.apply(_console2, [_chalk["default"].grey("".concat(this.prefix))].concat((0, _toConsumableArray2["default"])(params)));

      return this.createLogline("debug");
    }
  }, {
    key: "warn",
    value: function warn(message) {
      var _console3;

      for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        optionalParams[_key3 - 1] = arguments[_key3];
      }

      (_console3 = console).warn.apply(_console3, [_chalk["default"].yellow(this.prefix), message].concat(optionalParams));

      return this.createLogline("warn");
    }
  }, {
    key: "error",
    value: function error(message) {
      var _console4;

      for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        optionalParams[_key4 - 1] = arguments[_key4];
      }

      var _ref = message instanceof Error ? [message.name, message.message] : [message].concat(optionalParams),
          _ref2 = (0, _toArray2["default"])(_ref),
          firstSegment = _ref2[0],
          otherSegments = _ref2.slice(1);

      (_console4 = console).error.apply(_console4, [_chalk["default"].red(this.prefix), firstSegment].concat((0, _toConsumableArray2["default"])(otherSegments)));

      return this.createLogline("error");
    }
  }, {
    key: "createLogline",
    value: function createLogline(level) {
      var _this$prefix$split = this.prefix.split("\t"),
          _this$prefix$split2 = (0, _toArray2["default"])(_this$prefix$split),
          firstPrefixSegment = _this$prefix$split2[0],
          otherPrefixSegments = _this$prefix$split2.slice(1);

      var newFirstPrefixSegment = "".padStart(firstPrefixSegment.length);
      var newPrefix = [newFirstPrefixSegment].concat((0, _toConsumableArray2["default"])(otherPrefixSegments)).join("\t");
      var logger = new Logger(newPrefix);
      var add = logger[level].bind(logger);
      return {
        level: level,
        add: add
      };
    }
  }]);
  return Logger;
}();

exports.Logger = Logger;