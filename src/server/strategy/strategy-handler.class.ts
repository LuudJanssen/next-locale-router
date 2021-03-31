import { NextFunction, Request, Response } from "express"
import { default as NextServer } from "next/dist/next-server/server/next-server"
import { format, parse } from "url"
import { logger } from "../logger"
import { PermanentRedirectStrategy, RenderStrategy, Strategy, StrategyType } from "./strategy.type"
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
      return this.handleWithConfigOverride(strategy, request, response)
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

  private handleWithConfigOverride(strategy: RenderStrategy, request: Request, response: Response) {
    // This strategy temporarily
    const { i18n: originalI18n, ...config } = this.app.nextConfig
    this.app.nextConfig = config

    const { pathname, ...url } = parse(request.url)

    this.handle(request, response, {
      ...url,
      pathname: strategy.data.pathname,
      query: strategy.data.query,
    })

    this.app.nextConfig = {
      ...this.app.nextConfig,
      i18n: originalI18n,
    }

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
