"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrategyType = void 0;
var StrategyType;
exports.StrategyType = StrategyType;

(function (StrategyType) {
  StrategyType["PASSTHROUGH"] = "PASSTHROUGH";
  StrategyType["PERMANENT_REDIRECT"] = "PERMANENT_REDIRECT";
  StrategyType["RENDER"] = "RENDER";
})(StrategyType || (exports.StrategyType = StrategyType = {}));