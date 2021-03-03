import { updatePathnameWithRedirect } from "../../../strategy/util/url/update-pathname-with-redirect"
import { IRedirect } from "../../../util/redirect.interface"
import { parseHrefAsUrl } from "./parse-href-as-url"

export const updateHrefWithRedirect = (href: string, redirect: IRedirect) => {
  const { url, urlHadOrigin } = parseHrefAsUrl(href)

  const pathname = updatePathnameWithRedirect(url.pathname, redirect)
  url.pathname = pathname

  return urlHadOrigin ? url.toString() : url.pathname + url.search
}
