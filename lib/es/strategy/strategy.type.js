export let StrategyType;

(function (StrategyType) {
  StrategyType["PASSTHROUGH"] = "PASSTHROUGH";
  StrategyType["PERMANENT_REDIRECT"] = "PERMANENT_REDIRECT";
  StrategyType["RENDER"] = "RENDER";
})(StrategyType || (StrategyType = {}));