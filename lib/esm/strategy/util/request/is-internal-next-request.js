import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { getPathSegments } from "../url/get-path-segments";
export var isInternalNextRequest = function isInternalNextRequest(url) {
  var _getPathSegments = getPathSegments(url.pathname),
      _getPathSegments2 = _slicedToArray(_getPathSegments, 1),
      _getPathSegments2$ = _getPathSegments2[0],
      firstPathSegment = _getPathSegments2$ === void 0 ? "" : _getPathSegments2$;

  return firstPathSegment.startsWith("_next") || firstPathSegment.startsWith("__next");
};