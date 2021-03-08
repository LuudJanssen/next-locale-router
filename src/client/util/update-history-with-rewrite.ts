import { IRedirect } from "../../util/redirect.interface"
import { updateHrefWithRewrite } from "./update-href-with-redirect"

export const updateHistoryWithRewrite = (url: string, rewrite: IRedirect): boolean => {
  const newUrl = updateHrefWithRewrite(url, rewrite)

  console.log("constructed new url", newUrl)

  if (url === newUrl) {
    return false
  }

  window.history.pushState(window.history.state, "", newUrl)
  return true
}
