"use strict";

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChainablePassThroughStrategy = void 0;

require("core-js/modules/es.array.concat.js");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _strategy = require("../strategy.type");

var _chainableStrategy = require("./chainable-strategy.abstract");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ChainablePassThroughStrategy = /*#__PURE__*/function (_ChainableStrategy) {
  (0, _inherits2["default"])(ChainablePassThroughStrategy, _ChainableStrategy);

  var _super = _createSuper(ChainablePassThroughStrategy);

  function ChainablePassThroughStrategy() {
    var _this;

    (0, _classCallCheck2["default"])(this, ChainablePassThroughStrategy);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "type", _strategy.StrategyType.PASSTHROUGH);
    return _this;
  }

  (0, _createClass2["default"])(ChainablePassThroughStrategy, [{
    key: "serialize",
    value: function serialize() {
      return {
        type: this.type
      };
    }
  }]);
  return ChainablePassThroughStrategy;
}(_chainableStrategy.ChainableStrategy);

exports.ChainablePassThroughStrategy = ChainablePassThroughStrategy;