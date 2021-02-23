import { NextFunction, Request, Response } from "express"
import { default as NextServer } from "next/dist/next-server/server/next-server"
import { format } from "url"
import { logger } from "../logger"
import { StrategyType } from "./strategy-type.enum"
import { PermanentRedirectStrategy, Strategy } from "./strategy.type"
import { AvoidedRedirectLoopError } from "./util/request/avoided-redirect-loop.error"
import { getRequestUrl } from "./util/request/get-request-url"

export class StrategyHandler {
  protected readonly handle: ReturnType<NextServer["getRequestHandler"]>

  constructor(protected app: NextServer) {
    this.handle = app.getRequestHandler()
  }

  public handleStrategy(
    strategy: Strategy,
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    if (strategy.type === StrategyType.RENDER) {
      return this.app.render(request, response, strategy.data.pathname, strategy.data.query)
    }

    if (strategy.type === StrategyType.PERMANENT_REDIRECT) {
      this.avoidRedirectLoop(request, strategy)
      return response.redirect(308, strategy.data.location)
    }

    next()
  }

  private avoidRedirectLoop(request: Request, strategy: PermanentRedirectStrategy) {
    const { search, hash, pathname } = getRequestUrl(request)

    const originalPath = format({
      search,
      hash,
      pathname,
    })

    if (originalPath === strategy.data.location) {
      const error = new AvoidedRedirectLoopError(
        `Redirect loop avoided for hostname "${request.hostname}". Location was already "${strategy.data.location}".`,
      )

      logger.error(error)
      throw error
    }
  }
}
