import { Request } from "express";
import { Config } from "../config/config.class";
import { Strategy } from "./strategy.type";
export declare class StrategyInvestigator {
    protected config: Config;
    constructor(config: Config);
    determineStrategy(request: Request): Strategy;
    private getStrategy;
}
