"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainableStrategy = void 0;
const logger_1 = require("../../logger");
class ChainableStrategy {
    log(url) {
        logger_1.strategyLogger.log(this.serialize(), url);
        return this;
    }
}
exports.ChainableStrategy = ChainableStrategy;
