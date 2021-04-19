import { format, parse } from "url"
import { IRedirect } from "../../../util/redirect.interface"
import { updatePathnameWithRedirect } from "./update-pathname-with-redirect"

export const updateUrlWithRedirect = (url: string, redirect: IRedirect) => {
  const uri = parse(url)

  const pathname = updatePathnameWithRedirect(uri.path, redirect)

  return format({
    ...uri,
    pathname,
  })
}
