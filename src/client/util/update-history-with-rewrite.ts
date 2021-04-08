import { stripTrailingSlash } from "../../strategy/util/url/strip-trailing-slash"
import { updateUrlWithRedirect } from "../../strategy/util/url/update-url-with-redirect"
import { IRedirect } from "../../util/redirect.interface"
import { honorTrailingSlash } from "./honor-trailing-slash"

export const updateHistoryWithRewrite = (url: string, rewrite: IRedirect): boolean => {
  const urlWithRedirect = updateUrlWithRedirect(url, rewrite)
  const newUrl = honorTrailingSlash(urlWithRedirect)

  console.log(url, urlWithRedirect, newUrl)

  if (stripTrailingSlash(url) === stripTrailingSlash(newUrl)) {
    return false
  }

  window.history.pushState(window.history.state, "", newUrl)
  return true
}
