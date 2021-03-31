import { NextRouter } from "next/router"
import { format } from "url"
import { updateUrlWithRedirect } from "../../../server/strategy/util/url/update-url-with-redirect"
import { IRedirect } from "../../../server/util/redirect.interface"

export const updateAsParameterWithLocale = (
  as: Parameters<NextRouter["replace"]>["1"],
  redirect: IRedirect,
) => {
  if (typeof as === "undefined") {
    return as
  }

  const normalizedAs = typeof as === "string" ? as : format(as)
  return updateUrlWithRedirect(normalizedAs, redirect)
}
