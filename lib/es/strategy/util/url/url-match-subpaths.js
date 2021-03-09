import { cleanPathSegment } from "./clean-path-segment";
import { getPathSegments } from "./get-path-segments";
export const urlMatchSubpaths = (url, subpaths) => {
  const pathSegments = getPathSegments(url.pathname); // Default to "/" if there were no path segments

  const [expectedLocalePathSegment = "/"] = pathSegments;
  return subpaths.find(({
    path
  }) => cleanPathSegment(expectedLocalePathSegment) === cleanPathSegment(path));
};