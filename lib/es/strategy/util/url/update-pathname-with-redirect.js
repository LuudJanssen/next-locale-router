import isNil from "lodash/isNil";
import { cleanPathSegment } from "./clean-path-segment";
import { getPathSegments } from "./get-path-segments";
export const updatePathnameWithRedirect = (pathname, redirect) => {
  if (isNil(pathname)) {
    return redirect.destination;
  }

  const [firstPathSegment, ...pathSegments] = getPathSegments(pathname);
  const destinationPathSegment = cleanPathSegment(redirect.destination);
  const destinationPathSegments = destinationPathSegment ? [destinationPathSegment] : [];

  if (firstPathSegment === cleanPathSegment(redirect.source)) {
    return "/" + [...destinationPathSegments, ...pathSegments].join("/");
  }

  return "/" + [...destinationPathSegments, firstPathSegment, ...pathSegments].join("/");
};