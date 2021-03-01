import { URL } from "url"
import { getPathSegments } from "../url/get-path-segments"

export const isInternalNextRequest = (url: URL) => {
  const [firstPathSegment] = getPathSegments(url.pathname)
  return firstPathSegment?.startsWith("_next") ?? false
}
