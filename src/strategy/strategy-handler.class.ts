import { NextFunction, Request, Response } from "express"
import { format, parse } from "url"
import { logger } from "../logger"
import { NextInstance } from "../util/next-server.type"
import { PermanentRedirectStrategy, RenderStrategy, Strategy, StrategyType } from "./strategy.type"
import { createForgivingFrozenObject } from "./util/create-forgiving-frozen-object"
import { getRequestUrl } from "./util/request/get-request-url"

export class StrategyHandler {
  protected readonly handle: ReturnType<NextInstance["getRequestHandler"]>

  constructor(protected app: NextInstance) {
    this.handle = app.getRequestHandler()
  }

  public async handleStrategy(
    strategy: Strategy,
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    if (strategy.type === StrategyType.RENDER) {
      return await this.handleWithConfigOverride(strategy, request, response)
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

  private async handleWithConfigOverride(
    strategy: RenderStrategy,
    request: Request,
    response: Response,
  ) {
    const { pathname, ...url } = parse(request.url)
    const immutableQuery = createForgivingFrozenObject(strategy.data.query)

    await this.handle(request, response, {
      ...url,
      pathname: strategy.data.pathname,
      query: immutableQuery,
    })

    return
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
