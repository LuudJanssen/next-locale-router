import { updateUrlWithRedirect } from "../../server/strategy/util/url/update-url-with-redirect"
import { IRedirect } from "../../server/util/redirect.interface"

export const updateHistoryWithRewrite = (url: string, rewrite: IRedirect): boolean => {
  const newUrl = updateUrlWithRedirect(url, rewrite)

  if (url === newUrl) {
    return false
  }

  window.history.pushState(window.history.state, "", newUrl)
  return true
}
