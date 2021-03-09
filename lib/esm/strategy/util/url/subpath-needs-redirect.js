export var subpathNeedsRedirect = function subpathNeedsRedirect(url, subpath) {
  return !url.pathname.startsWith(subpath.path);
};