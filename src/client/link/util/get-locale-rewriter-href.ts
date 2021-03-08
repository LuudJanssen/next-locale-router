import { updateUrlWithRedirect } from "../../../strategy/util/url/update-url-with-redirect"
import { IRedirect } from "../../../util/redirect.interface"

export const getLocaleRewriterHref = (originalHref: string, redirectForLocale?: IRedirect) => {
  return redirectForLocale ? updateUrlWithRedirect(originalHref, redirectForLocale) : originalHref
}
