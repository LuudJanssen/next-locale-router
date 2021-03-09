import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { StrategyType } from "../strategy.type";
import { ChainableStrategy } from "./chainable-strategy.abstract";
export var ChainableRenderStrategy = /*#__PURE__*/function (_ChainableStrategy) {
  _inherits(ChainableRenderStrategy, _ChainableStrategy);

  var _super = _createSuper(ChainableRenderStrategy);

  function ChainableRenderStrategy(data) {
    var _this;

    _classCallCheck(this, ChainableRenderStrategy);

    _this = _super.call(this);
    _this.data = data;

    _defineProperty(_assertThisInitialized(_this), "type", StrategyType.RENDER);

    return _this;
  }

  _createClass(ChainableRenderStrategy, [{
    key: "serialize",
    value: function serialize() {
      return {
        type: this.type,
        data: this.data
      };
    }
  }]);

  return ChainableRenderStrategy;
}(ChainableStrategy);