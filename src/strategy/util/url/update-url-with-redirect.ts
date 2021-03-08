import { parse, serialize } from "uri-js"
import { IRedirect } from "../../../util/redirect.interface"
import { updatePathnameWithRedirect } from "./update-pathname-with-redirect"

export const updateUrlWithRedirect = (url: string, redirect: IRedirect) => {
  const uri = parse(url)

  const path = updatePathnameWithRedirect(uri.path, redirect)

  return serialize({
    ...uri,
    path,
  })
}
