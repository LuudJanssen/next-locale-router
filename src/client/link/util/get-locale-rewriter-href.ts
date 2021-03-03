import { IRedirect } from "../../../util/redirect.interface"
import { NoUrlBaseOrBrowserError } from "./no-url-base-or-browser.error"
import { updateHrefWithRedirect } from "./update-href-with-redirect"

export const getLocaleRewriterHref = (originalHref: string, redirectForLocale?: IRedirect) => {
  try {
    return redirectForLocale
      ? updateHrefWithRedirect(originalHref, redirectForLocale)
      : originalHref
  } catch (error) {
    if (error instanceof NoUrlBaseOrBrowserError) {
      throw new Error(
        "The `href` property on  next-locale-router's `<LinkLocaleRewriter>` component is missing an origin and rendering was happening outside of a browser environment. Can't construct the full URL.",
      )
    }

    throw error
  }
}
