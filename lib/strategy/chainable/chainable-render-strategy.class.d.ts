import { RenderStrategy, RenderStrategyData, StrategyType } from "../strategy.type";
import { ChainableStrategy } from "./chainable-strategy.abstract";
export declare class ChainableRenderStrategy extends ChainableStrategy {
    protected data: RenderStrategyData;
    protected readonly type = StrategyType.RENDER;
    constructor(data: RenderStrategyData);
    serialize(): RenderStrategy;
}
