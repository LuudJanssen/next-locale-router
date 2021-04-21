import { NextRouter } from "next/router"
import { format } from "url"
import { updateUrlWithRedirect } from "../../../strategy/util/url/update-url-with-redirect"
import { IRedirect } from "../../../util/redirect.interface"
import { honorTrailingSlash } from "../../util/honor-trailing-slash"

export const updateAsParameterWithLocale = (
  as: Parameters<NextRouter["replace"]>["1"],
  redirect: IRedirect,
) => {
  if (typeof as === "undefined") {
    return as
  }

  const normalizedAs = typeof as === "string" ? as : format(as)
  const asWithRedirect = updateUrlWithRedirect(normalizedAs, redirect)
  return honorTrailingSlash(asWithRedirect)
}
