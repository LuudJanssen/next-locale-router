import _toArray from "@babel/runtime/helpers/toArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import chalk from "chalk";
export var Logger = /*#__PURE__*/function () {
  function Logger() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[next-i18n-router] \t";

    _classCallCheck(this, Logger);

    this.prefix = prefix;
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(message) {
      var _console;

      for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        optionalParams[_key - 1] = arguments[_key];
      }

      (_console = console).log.apply(_console, [chalk.cyan(this.prefix), message].concat(optionalParams));

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
          return chalk.grey(param);
        }

        return param;
      });

      (_console2 = console).debug.apply(_console2, [chalk.grey("".concat(this.prefix))].concat(_toConsumableArray(params)));

      return this.createLogline("debug");
    }
  }, {
    key: "warn",
    value: function warn(message) {
      var _console3;

      for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        optionalParams[_key3 - 1] = arguments[_key3];
      }

      (_console3 = console).warn.apply(_console3, [chalk.yellow(this.prefix), message].concat(optionalParams));

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
          _ref2 = _toArray(_ref),
          firstSegment = _ref2[0],
          otherSegments = _ref2.slice(1);

      (_console4 = console).error.apply(_console4, [chalk.red(this.prefix), firstSegment].concat(_toConsumableArray(otherSegments)));

      return this.createLogline("error");
    }
  }, {
    key: "createLogline",
    value: function createLogline(level) {
      var _this$prefix$split = this.prefix.split("\t"),
          _this$prefix$split2 = _toArray(_this$prefix$split),
          firstPrefixSegment = _this$prefix$split2[0],
          otherPrefixSegments = _this$prefix$split2.slice(1);

      var newFirstPrefixSegment = "".padStart(firstPrefixSegment.length);
      var newPrefix = [newFirstPrefixSegment].concat(_toConsumableArray(otherPrefixSegments)).join("\t");
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