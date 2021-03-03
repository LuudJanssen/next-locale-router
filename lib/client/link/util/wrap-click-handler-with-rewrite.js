"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapClickHandlerWithRewrite = void 0;
const router_1 = require("next/router");
const disable_history_push_state_for_one_tick_1 = require("./disable-history-push-state-for-one-tick");
const update_href_with_redirect_1 = require("./update-href-with-redirect");
const wrapClickHandlerWithRewrite = (onClick, redirect) => {
    const router = router_1.useRouter();
    if (typeof redirect === "undefined") {
        return onClick;
    }
    const updateHistoryWithRewrite = (url) => {
        const newUrl = update_href_with_redirect_1.updateHrefWithRedirect(url, redirect);
        if (url === newUrl) {
            return false;
        }
        window.history.pushState(window.history.state, "", newUrl);
        return true;
    };
    return (...args) => {
        router.events.on("beforeHistoryChange", function disableChangeStateAndRewrite(url) {
            const historyUpdateExecuted = updateHistoryWithRewrite(url);
            if (historyUpdateExecuted) {
                // We temporarily disable window.history.pushState for one tick
                // This is the tick in which Next.js will try to update the history
                disable_history_push_state_for_one_tick_1.disableHistoryPushStateForOneTick();
            }
            // We directly sign off the event handler we are in -> I love Javascript
            router.events.off("beforeHistoryChange", disableChangeStateAndRewrite);
        });
        onClick(...args);
    };
};
exports.wrapClickHandlerWithRewrite = wrapClickHandlerWithRewrite;
