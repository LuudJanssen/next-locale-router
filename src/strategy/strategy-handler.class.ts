import { NextFunction } from "express"
import { ServerResponse } from "http"
import { default as NextServer } from "next/dist/next-server/server/next-server"
import { Strategy } from "./strategy.type"

export class StrategyHandler {
  constructor(protected app: NextServer) {}

  public handleStrategy(strategy: Strategy, response: ServerResponse, next: NextFunction) {
    next()
  }
}
