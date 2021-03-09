import { cleanPathSegment } from "./clean-path-segment";
import { getPathSegments } from "./get-path-segments";
export const urlMatchRedirects = (url, redirects) => {
  const pathSegments = getPathSegments(url.pathname);
  const [expectedLocalePathSegment] = pathSegments;

  if (typeof expectedLocalePathSegment === "undefined") {
    return undefined;
  }

  return redirects.find(({
    source
  }) => cleanPathSegment(source) === expectedLocalePathSegment);
};