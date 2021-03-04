"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainablePassThroughStrategy = void 0;
const strategy_type_1 = require("../strategy.type");
const chainable_strategy_abstract_1 = require("./chainable-strategy.abstract");
class ChainablePassThroughStrategy extends chainable_strategy_abstract_1.ChainableStrategy {
    constructor() {
        super(...arguments);
        this.type = strategy_type_1.StrategyType.PASSTHROUGH;
    }
    serialize() {
        return {
            type: this.type,
        };
    }
}
exports.ChainablePassThroughStrategy = ChainablePassThroughStrategy;
