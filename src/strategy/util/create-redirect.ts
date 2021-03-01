import { format, parse, URL } from "url"
import { IRedirect } from "../../util/redirect.interface"
import { ChainablePermanentRedirectStrategy as PermanentRedirect } from "../chainable"
import { formatUrl } from "./url/format-url"
import { stripTrailingSlash } from "./url/strip-trailing-slash"
import { updatePathnameWithRedirect } from "./url/update-pathname-with-redirect"

export const createRedirect = (url: URL, redirect: IRedirect) => {
  const { pathname: originalPathname, search, hash } = parse(formatUrl(url)) // We need the legacy Node.js API url format
  const newPathname = updatePathnameWithRedirect(originalPathname, redirect)

  const formattedPathname = format({
    search,
    hash,
    pathname: stripTrailingSlash(newPathname),
  })

  return new PermanentRedirect({ location: formattedPathname })
}
