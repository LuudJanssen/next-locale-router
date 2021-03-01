import { IRedirect } from "../../../util/redirect.interface"
import { cleanPathSegment } from "./clean-path-segment"
import { getPathSegments } from "./get-path-segments"

export const updatePathnameWithRedirect = (
  pathname: string | null,
  redirect: IRedirect,
): string => {
  if (pathname === null) {
    return redirect.destination
  }

  const [firstPathSegment, ...pathSegments] = getPathSegments(pathname)
  const destinationPathSegment = cleanPathSegment(redirect.destination)

  if (firstPathSegment === cleanPathSegment(redirect.source)) {
    return "/" + [destinationPathSegment, ...pathSegments].join("/")
  }

  return "/" + [destinationPathSegment, firstPathSegment, ...pathSegments].join("/")
}
