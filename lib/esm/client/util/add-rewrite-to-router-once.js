import { disableHistoryPushStateForOneTick } from "../link/util/disable-history-push-state-for-one-tick";
import { updateHistoryWithRewrite } from "./update-history-with-rewrite";
export var addRewriteToRouterOnce = function addRewriteToRouterOnce(router, rewrite) {
  router.events.on("beforeHistoryChange", function disableChangeStateAndRewrite(url) {
    var historyUpdateExecuted = updateHistoryWithRewrite(url, rewrite);

    if (historyUpdateExecuted) {
      // We temporarily disable window.history.pushState for one tick
      // This is the tick in which Next.js will try to update the history
      disableHistoryPushStateForOneTick();
    } // We directly sign off the event handler we are in -> I love Javascript


    router.events.off("beforeHistoryChange", disableChangeStateAndRewrite);
  });
};