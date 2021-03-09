"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRewriteToRouterOnce = void 0;
const disable_history_push_state_for_one_tick_1 = require("../link/util/disable-history-push-state-for-one-tick");
const update_history_with_rewrite_1 = require("./update-history-with-rewrite");
const addRewriteToRouterOnce = (router, rewrite) => {
    router.events.on("beforeHistoryChange", function disableChangeStateAndRewrite(url) {
        const historyUpdateExecuted = update_history_with_rewrite_1.updateHistoryWithRewrite(url, rewrite);
        if (historyUpdateExecuted) {
            // We temporarily disable window.history.pushState for one tick
            // This is the tick in which Next.js will try to update the history
            disable_history_push_state_for_one_tick_1.disableHistoryPushStateForOneTick();
        }
        // We directly sign off the event handler we are in -> I love Javascript
        router.events.off("beforeHistoryChange", disableChangeStateAndRewrite);
    });
};
exports.addRewriteToRouterOnce = addRewriteToRouterOnce;
