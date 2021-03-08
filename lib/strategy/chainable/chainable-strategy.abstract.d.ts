/// <reference types="node" />
import { URL } from "url";
import { Strategy, StrategyType } from "../strategy.type";
export declare abstract class ChainableStrategy {
    protected abstract readonly type: StrategyType;
    log(url: URL): ChainableStrategy;
    abstract serialize(): Strategy;
}
