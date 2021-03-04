import { parse, serialize } from "uri-js"
import { updatePathnameWithRedirect } from "../../../strategy/util/url/update-pathname-with-redirect"
import { IRedirect } from "../../../util/redirect.interface"

export const updateHrefWithRedirect = (href: string, redirect: IRedirect) => {
  const uri = parse(href)

  const path = updatePathnameWithRedirect(uri.path, redirect)

  return serialize({
    ...uri,
    path,
  })
}
