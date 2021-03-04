import { IRedirect } from "../../../util/redirect.interface"
import { updateHrefWithRedirect } from "./update-href-with-redirect"

export const getLocaleRewriterHref = (originalHref: string, redirectForLocale?: IRedirect) => {
  return redirectForLocale ? updateHrefWithRedirect(originalHref, redirectForLocale) : originalHref
}
