import { parse } from "url"
import { InvalidUrlError } from "./invalid-url.error"
import { isValidParsedUrl, ParsedUrl } from "./parsed-url.type"

export const parseUrl = (url: string): ParsedUrl => {
  const urlObject = parse(url, true)

  if (!isValidParsedUrl(urlObject)) {
    throw new InvalidUrlError()
  }

  return urlObject
}
