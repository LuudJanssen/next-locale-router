import { NextFunction, Request, Response } from "express"
import { default as NextServer } from "next/dist/next-server/server/next-server"
import { format } from "url"
import { logger } from "../logger"
import { StrategyType } from "./strategy-type.enum"
import { PermanentRedirectStrategy, Strategy } from "./strategy.type"
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
      if (this.isRedirectLoop(request, strategy)) {
        logger.error(
          `Redirect loop avoided for hostname "${request.hostname}". Location was already "${strategy.data.location}".`,
        )

        return next()
      }

      return response.redirect(308, strategy.data.location)
    }

    next()
  }

  private isRedirectLoop(request: Request, strategy: PermanentRedirectStrategy): boolean {
    const { search, hash, pathname } = getRequestUrl(request)

    const originalPath = format({
      search,
      hash,
      pathname,
    })

    return originalPath === strategy.data.location
  }
}
