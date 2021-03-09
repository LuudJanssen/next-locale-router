export var getPathSegments = function getPathSegments(pathname) {
  return pathname.split("/").filter(function (segment) {
    return segment !== "";
  });
};