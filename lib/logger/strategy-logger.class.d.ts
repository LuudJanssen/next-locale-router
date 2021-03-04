/// <reference types="node" />
import { URL } from "url";
import { Strategy } from "../strategy/strategy.type";
import { Logger } from "./logger.class";
export declare class StrategyLogger {
    private logger;
    constructor(logger: Logger);
    log(strategy: Strategy, url: URL): void;
}
