import { parse, serialize } from "uri-js"
import { updatePathnameWithRedirect } from "../../strategy/util/url/update-pathname-with-redirect"
import { IRedirect } from "../../util/redirect.interface"

export const updateHrefWithRewrite = (href: string, rewrite: IRedirect) => {
  const uri = parse(href)

  const path = updatePathnameWithRedirect(uri.path, rewrite)

  return serialize({
    ...uri,
    path,
  })
}
