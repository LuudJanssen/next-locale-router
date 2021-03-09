export const subpathNeedsRedirect = (url, subpath) => {
  return !url.pathname.startsWith(subpath.path);
};