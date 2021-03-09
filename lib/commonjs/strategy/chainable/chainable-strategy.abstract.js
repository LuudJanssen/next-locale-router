"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChainableStrategy = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _logger = require("../../logger");

var ChainableStrategy = /*#__PURE__*/function () {
  function ChainableStrategy() {
    (0, _classCallCheck2["default"])(this, ChainableStrategy);
    (0, _defineProperty2["default"])(this, "type", void 0);
  }

  (0, _createClass2["default"])(ChainableStrategy, [{
    key: "log",
    value: function log(url) {
      _logger.strategyLogger.log(this.serialize(), url);

      return this;
    }
  }]);
  return ChainableStrategy;
}();

exports.ChainableStrategy = ChainableStrategy;