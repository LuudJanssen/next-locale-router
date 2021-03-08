import { IRedirect } from "../../../util/redirect.interface"
import { updateHrefWithRewrite } from "../../util/update-href-with-redirect"

export const getLocaleRewriterHref = (originalHref: string, redirectForLocale?: IRedirect) => {
  return redirectForLocale ? updateHrefWithRewrite(originalHref, redirectForLocale) : originalHref
}
