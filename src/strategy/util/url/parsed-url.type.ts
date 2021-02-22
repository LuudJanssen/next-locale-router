import { UrlWithParsedQuery } from "url"
import { RequiredNonNull } from "../../../util/remove-null.type"

export type ParsedUrl = RequiredNonNull<UrlWithParsedQuery, "pathname">

export const isValidParsedUrl = (url: UrlWithParsedQuery): url is ParsedUrl => {
  return url.pathname !== null
}
