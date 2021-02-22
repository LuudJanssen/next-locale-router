import { Request } from "express"
import { format, URL } from "url"

export const getRequestUrl = (request: Request): URL => {
  const protocol = request.protocol
  const host = request.hostname

  const base = format({
    protocol,
    host,
    slashes: true,
  })

  const url = new URL(request.url, base)
  return url
}
