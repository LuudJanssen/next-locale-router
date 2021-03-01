import { URL } from "url"
import { ISubpath } from "../../../subpath.interface"
import { cleanPathSegment } from "./clean-path-segment"
import { getPathSegments } from "./get-path-segments"

export const urlMatchSubpaths = (url: URL, subpaths: ISubpath[]): ISubpath | undefined => {
  const pathSegments = getPathSegments(url.pathname)

  // Default to "/" if there were no path segments
  const [expectedLocalePathSegment = "/"] = pathSegments

  return subpaths.find(
    ({ path }) => cleanPathSegment(expectedLocalePathSegment) === cleanPathSegment(path),
  )
}
