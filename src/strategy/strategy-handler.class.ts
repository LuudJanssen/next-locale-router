import { NextFunction, Request, Response } from "express"
import { default as NextServer } from "next/dist/next-server/server/next-server"
import { StrategyType } from "./strategy-type.enum"
import { Strategy } from "./strategy.type"

export class StrategyHandler {
  constructor(protected app: NextServer) {}

  public handleStrategy(
    strategy: Strategy,
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    if (strategy.type === StrategyType.RENDER) {
      return this.app.render(request, response, strategy.data.pathname, strategy.data.query)
    }

    next()
  }
}
