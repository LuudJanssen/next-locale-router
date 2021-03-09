import { PermanentRedirectStrategy, PermanentRedirectStrategyData, StrategyType } from "../strategy.type";
import { ChainableStrategy } from "./chainable-strategy.abstract";
export declare class ChainablePermanentRedirectStrategy extends ChainableStrategy {
    protected data: PermanentRedirectStrategyData;
    protected readonly type = StrategyType.PERMANENT_REDIRECT;
    constructor(data: PermanentRedirectStrategyData);
    serialize(): PermanentRedirectStrategy;
}
