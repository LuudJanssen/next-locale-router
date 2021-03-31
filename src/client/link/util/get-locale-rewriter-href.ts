import { updateUrlWithRedirect } from "../../../server/strategy/util/url/update-url-with-redirect"
import { IRedirect } from "../../../server/util/redirect.interface"

export const getLocaleRewriterHref = (originalHref: string, redirectForLocale?: IRedirect) => {
  return redirectForLocale ? updateUrlWithRedirect(originalHref, redirectForLocale) : originalHref
}
