import { Request } from "express"
import Negotiator from "negotiator"

export const extractLocaleFromHeader = (request: Request, locales: string[]) => {
  const negotiator = new Negotiator(request)
  return negotiator.language(locales)
}
