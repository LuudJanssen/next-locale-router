import { NextRouter } from "next/router"
import { IRedirect } from "../../server/util/redirect.interface"
import { disableHistoryMethodForOneTick } from "../link/util/disable-history-method-for-one-tick"
import { ReplaceableHistoryMethods } from "./replaceable-history-methods.type"
import { updateHistoryWithRewrite } from "./update-history-with-rewrite"

export const addRewriteToRouterOnce = (
  router: NextRouter,
  rewrite: IRedirect,
  method: ReplaceableHistoryMethods,
) => {
  router.events.on("beforeHistoryChange", function disableChangeStateAndRewrite(url) {
    const historyUpdateExecuted = updateHistoryWithRewrite(url, rewrite)

    if (historyUpdateExecuted) {
      // We temporarily disable window.history.pushState for one tick
      // This is the tick in which Next.js will try to update the history
      disableHistoryMethodForOneTick(method)
    }

    // We directly sign off the event handler we are in -> I love Javascript
    router.events.off("beforeHistoryChange", disableChangeStateAndRewrite)
  })
}
