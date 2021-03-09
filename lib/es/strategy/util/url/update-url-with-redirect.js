import { parse, serialize } from "uri-js";
import { updatePathnameWithRedirect } from "./update-pathname-with-redirect";
export const updateUrlWithRedirect = (url, redirect) => {
  const uri = parse(url);
  const path = updatePathnameWithRedirect(uri.path, redirect);
  return serialize({ ...uri,
    path
  });
};