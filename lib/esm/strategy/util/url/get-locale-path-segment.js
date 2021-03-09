import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { getLocalePathSegmentsForDomain } from "../../../util/get-locale-path-segments-for-locale";
import { getPathSegments } from "./get-path-segments";
export var getLocalePathSegment = function getLocalePathSegment(validDomains, url) {
  var pathSegments = getPathSegments(url.pathname);

  var _pathSegments = _slicedToArray(pathSegments, 1),
      expectedLocalePathSegment = _pathSegments[0];

  if (typeof expectedLocalePathSegment === "undefined") {
    return undefined;
  }

  var localePathSegments = validDomains.flatMap(getLocalePathSegmentsForDomain);
  var isLocaleRelatedSegment = localePathSegments.includes(expectedLocalePathSegment);

  if (!isLocaleRelatedSegment) {
    return undefined;
  }

  return expectedLocalePathSegment;
};