import { updateUrlWithRedirect } from "../../strategy/util/url/update-url-with-redirect"
import { IRedirect } from "../../util/redirect.interface"

export const updateHistoryWithRewrite = (url: string, rewrite: IRedirect): boolean => {
  const newUrl = updateUrlWithRedirect(url, rewrite)

  console.log("constructed new url", newUrl)

  if (url === newUrl) {
    return false
  }

  window.history.pushState(window.history.state, "", newUrl)
  return true
}
