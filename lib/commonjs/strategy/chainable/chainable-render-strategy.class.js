"use strict";

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChainableRenderStrategy = void 0;

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

var ChainableRenderStrategy = /*#__PURE__*/function (_ChainableStrategy) {
  (0, _inherits2["default"])(ChainableRenderStrategy, _ChainableStrategy);

  var _super = _createSuper(ChainableRenderStrategy);

  function ChainableRenderStrategy(data) {
    var _this;

    (0, _classCallCheck2["default"])(this, ChainableRenderStrategy);
    _this = _super.call(this);
    _this.data = data;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "type", _strategy.StrategyType.RENDER);
    return _this;
  }

  (0, _createClass2["default"])(ChainableRenderStrategy, [{
    key: "serialize",
    value: function serialize() {
      return {
        type: this.type,
        data: this.data
      };
    }
  }]);
  return ChainableRenderStrategy;
}(_chainableStrategy.ChainableStrategy);

exports.ChainableRenderStrategy = ChainableRenderStrategy;