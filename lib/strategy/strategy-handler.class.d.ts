import { NextFunction, Request, Response } from "express";
import { default as NextServer } from "next/dist/next-server/server/next-server";
import { Strategy } from "./strategy.type";
export declare class StrategyHandler {
    protected app: NextServer;
    protected readonly handle: ReturnType<NextServer["getRequestHandler"]>;
    constructor(app: NextServer);
    handleStrategy(strategy: Strategy, request: Request, response: Response, next: NextFunction): void;
    private handleWithConfigOverride;
    private isRedirectLoop;
}
