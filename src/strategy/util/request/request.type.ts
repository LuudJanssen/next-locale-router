import { IncomingMessage } from "http"

export interface Request extends IncomingMessage {
  url: string
}

export const isValidRequest = (request: IncomingMessage): request is Request => {
  return typeof request.url !== "undefined"
}
