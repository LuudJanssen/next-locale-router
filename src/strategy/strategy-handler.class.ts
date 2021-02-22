import { IncomingMessage, ServerResponse } from "http"
import { default as NextServer } from "next/dist/next-server/server/next-server"
import { Strategy } from "./strategy.type"

export class StrategyHandler {
  protected readonly handle: ReturnType<NextServer["getRequestHandler"]>

  constructor(protected app: NextServer) {
    this.handle = app.getRequestHandler()
  }

  public handleStrategy(strategy: Strategy, request: IncomingMessage, response: ServerResponse) {
    this.handle(request, response)
  }
}
