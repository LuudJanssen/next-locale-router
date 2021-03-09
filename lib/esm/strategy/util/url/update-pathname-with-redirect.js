import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _toArray from "@babel/runtime/helpers/toArray";
import isNil from "lodash/isNil";
import { cleanPathSegment } from "./clean-path-segment";
import { getPathSegments } from "./get-path-segments";
export var updatePathnameWithRedirect = function updatePathnameWithRedirect(pathname, redirect) {
  if (isNil(pathname)) {
    return redirect.destination;
  }

  var _getPathSegments = getPathSegments(pathname),
      _getPathSegments2 = _toArray(_getPathSegments),
      firstPathSegment = _getPathSegments2[0],
      pathSegments = _getPathSegments2.slice(1);

  var destinationPathSegment = cleanPathSegment(redirect.destination);
  var destinationPathSegments = destinationPathSegment ? [destinationPathSegment] : [];

  if (firstPathSegment === cleanPathSegment(redirect.source)) {
    return "/" + [].concat(destinationPathSegments, _toConsumableArray(pathSegments)).join("/");
  }

  return "/" + [].concat(destinationPathSegments, [firstPathSegment], _toConsumableArray(pathSegments)).join("/");
};