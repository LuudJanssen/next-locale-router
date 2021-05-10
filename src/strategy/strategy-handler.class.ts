import { NextFunction, Request, Response } from "express"
import { format, parse } from "url"
import { logger } from "../logger"
import { NextInstance, NextServer } from "../util/next-server.type"
import { PermanentRedirectStrategy, RenderStrategy, Strategy, StrategyType } from "./strategy.type"
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
    // We need to access Next.js internals to "hack" this feature. That's why we also pin Next.js to a specific version.
    // @ts-expect-error
    const server: NextServer = await this.app.getServer()
    const { i18n: originalI18n, ...config } = server.nextConfig
    server.nextConfig = config

    const { pathname, ...url } = parse(request.url)

    await this.handle(request, response, {
      ...url,
      pathname: strategy.data.pathname,
      query: strategy.data.query,
    })

    server.nextConfig = {
      ...server.nextConfig,
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
