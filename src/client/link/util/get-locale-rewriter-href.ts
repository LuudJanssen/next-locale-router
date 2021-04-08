import isNil from "lodash/isNil"
import { updateUrlWithRedirect } from "../../../strategy/util/url/update-url-with-redirect"
import { IRedirect } from "../../../util/redirect.interface"
import { honorTrailingSlash } from "../../util/honor-trailing-slash"

export const getLocaleRewriterHref = (originalHref: string, redirectForLocale?: IRedirect) => {
  if (isNil(redirectForLocale)) {
    return originalHref
  }

  const hrefWithRedirect = updateUrlWithRedirect(originalHref, redirectForLocale)
  return honorTrailingSlash(hrefWithRedirect)
}
