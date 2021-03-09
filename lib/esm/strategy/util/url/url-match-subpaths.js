import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { cleanPathSegment } from "./clean-path-segment";
import { getPathSegments } from "./get-path-segments";
export var urlMatchSubpaths = function urlMatchSubpaths(url, subpaths) {
  var pathSegments = getPathSegments(url.pathname); // Default to "/" if there were no path segments

  var _pathSegments = _slicedToArray(pathSegments, 1),
      _pathSegments$ = _pathSegments[0],
      expectedLocalePathSegment = _pathSegments$ === void 0 ? "/" : _pathSegments$;

  return subpaths.find(function (_ref) {
    var path = _ref.path;
    return cleanPathSegment(expectedLocalePathSegment) === cleanPathSegment(path);
  });
};