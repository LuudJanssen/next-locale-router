import { URL } from "url"
import { ISubpath } from "../../../subpath.interface"

export const subpathNeedsRedirect = (url: URL, subpath: ISubpath) => {
  return !url.pathname.startsWith(subpath.path)
}
