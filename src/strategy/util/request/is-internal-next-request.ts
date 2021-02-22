import { getPathSegments } from "../url/get-path-segments"
import { Request } from "./request.type"

export const isInternalNextRequest = (request: Request) => {
  const [firstPathSegment] = getPathSegments(request.url)
  return firstPathSegment === "_next"
}
