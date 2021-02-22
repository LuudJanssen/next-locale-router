import { parse, ParsedUrlQuery } from "querystring"
import { URL } from "url"

export const getQueryParameters = (url: URL): ParsedUrlQuery => {
  const search = url.search

  if (search === "" || search === "?") {
    return {}
  }

  const query = search.startsWith("?") ? search.substring(1) : search
  return parse(query)
}
