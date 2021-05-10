import { parse } from "url"
import { IRedirect } from "../../../util/redirect.interface"
import { updatePathnameInUrl } from "./update-pathname-in-url"
import { updatePathnameWithRedirect } from "./update-pathname-with-redirect"

export const updateUrlWithRedirect = (url: string, redirect: IRedirect) => {
  const { pathname: originalPathname } = parse(url)
  const pathname = updatePathnameWithRedirect(originalPathname, redirect)
  return updatePathnameInUrl(url, pathname)
}
