import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { cleanPathSegment } from "./clean-path-segment";
import { getPathSegments } from "./get-path-segments";
export var urlMatchRedirects = function urlMatchRedirects(url, redirects) {
  var pathSegments = getPathSegments(url.pathname);

  var _pathSegments = _slicedToArray(pathSegments, 1),
      expectedLocalePathSegment = _pathSegments[0];

  if (typeof expectedLocalePathSegment === "undefined") {
    return undefined;
  }

  return redirects.find(function (_ref) {
    var source = _ref.source;
    return cleanPathSegment(source) === expectedLocalePathSegment;
  });
};