import { format, parse } from "url";
import { ChainablePermanentRedirectStrategy as PermanentRedirect } from "../chainable";
import { formatUrl } from "./url/format-url";
import { stripTrailingSlash } from "./url/strip-trailing-slash";
import { updatePathnameWithRedirect } from "./url/update-pathname-with-redirect";
export var createRedirect = function createRedirect(url, redirect) {
  var _parse = parse(formatUrl(url)),
      pathname = _parse.pathname,
      search = _parse.search,
      hash = _parse.hash; // We need the legacy Node.js API url format


  var newPathname = updatePathnameWithRedirect(pathname, redirect);
  var formattedPathname = format({
    search: search,
    hash: hash,
    pathname: stripTrailingSlash(newPathname)
  });
  return new PermanentRedirect({
    location: formattedPathname
  });
};