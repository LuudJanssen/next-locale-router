"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainablePermanentRedirectStrategy = void 0;
const strategy_type_1 = require("../strategy.type");
const chainable_strategy_abstract_1 = require("./chainable-strategy.abstract");
class ChainablePermanentRedirectStrategy extends chainable_strategy_abstract_1.ChainableStrategy {
    constructor(data) {
        super();
        this.data = data;
        this.type = strategy_type_1.StrategyType.PERMANENT_REDIRECT;
    }
    serialize() {
        return {
            type: this.type,
            data: this.data,
        };
    }
}
exports.ChainablePermanentRedirectStrategy = ChainablePermanentRedirectStrategy;
