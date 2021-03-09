import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { strategyLogger } from "../../logger";
export var ChainableStrategy = /*#__PURE__*/function () {
  function ChainableStrategy() {
    _classCallCheck(this, ChainableStrategy);

    _defineProperty(this, "type", void 0);
  }

  _createClass(ChainableStrategy, [{
    key: "log",
    value: function log(url) {
      strategyLogger.log(this.serialize(), url);
      return this;
    }
  }]);

  return ChainableStrategy;
}();