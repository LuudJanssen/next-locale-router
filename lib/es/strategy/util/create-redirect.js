import { format, parse } from "url";
import { ChainablePermanentRedirectStrategy as PermanentRedirect } from "../chainable";
import { formatUrl } from "./url/format-url";
import { stripTrailingSlash } from "./url/strip-trailing-slash";
import { updatePathnameWithRedirect } from "./url/update-pathname-with-redirect";
export const createRedirect = (url, redirect) => {
  const {
    pathname,
    search,
    hash
  } = parse(formatUrl(url)); // We need the legacy Node.js API url format

  const newPathname = updatePathnameWithRedirect(pathname, redirect);
  const formattedPathname = format({
    search,
    hash,
    pathname: stripTrailingSlash(newPathname)
  });
  return new PermanentRedirect({
    location: formattedPathname
  });
};