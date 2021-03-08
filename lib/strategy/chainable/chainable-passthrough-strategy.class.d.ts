import { PassThroughStrategy, StrategyType } from "../strategy.type";
import { ChainableStrategy } from "./chainable-strategy.abstract";
export declare class ChainablePassThroughStrategy extends ChainableStrategy {
    protected readonly type = StrategyType.PASSTHROUGH;
    serialize(): PassThroughStrategy;
}
