import { getPathSegments } from "../url/get-path-segments";
export const isInternalNextRequest = url => {
  const [firstPathSegment = ""] = getPathSegments(url.pathname);
  return firstPathSegment.startsWith("_next") || firstPathSegment.startsWith("__next");
};