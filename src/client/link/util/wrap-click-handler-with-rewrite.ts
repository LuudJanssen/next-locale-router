import { useRouter } from "next/router"
import { IRedirect } from "../../../util/redirect.interface"
import { disableHistoryPushStateForOneTick } from "./disable-history-push-state-for-one-tick"
import { updateHrefWithRedirect } from "./update-href-with-redirect"

export const wrapClickHandlerWithRewrite = (
  onClick: React.MouseEventHandler,
  redirect?: IRedirect,
): React.MouseEventHandler => {
  const router = useRouter()

  if (typeof redirect === "undefined") {
    return onClick
  }

  const updateHistoryWithRewrite = (url: string): boolean => {
    const newUrl = updateHrefWithRedirect(url, redirect)

    if (url === newUrl) {
      return false
    }

    window.history.replaceState(window.history.state, "", newUrl)
    return true
  }

  return (...args) => {
    router.events.on("beforeHistoryChange", function disableChangeStateAndRewrite(url) {
      const historyUpdateExecuted = updateHistoryWithRewrite(url)

      if (historyUpdateExecuted) {
        // We temporarily disable window.history.pushState for one tick
        // This is the tick in which Next.js will try to update the history
        disableHistoryPushStateForOneTick()
      }

      // We directly sign off the event handler we are in -> I love Javascript
      router.events.off("beforeHistoryChange", disableChangeStateAndRewrite)
    })

    onClick(...args)
  }
}
