"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRewriteToRouterOnce = void 0;

var _disableHistoryPushStateForOneTick = require("../link/util/disable-history-push-state-for-one-tick");

var _updateHistoryWithRewrite = require("./update-history-with-rewrite");

var addRewriteToRouterOnce = function addRewriteToRouterOnce(router, rewrite) {
  router.events.on("beforeHistoryChange", function disableChangeStateAndRewrite(url) {
    var historyUpdateExecuted = (0, _updateHistoryWithRewrite.updateHistoryWithRewrite)(url, rewrite);

    if (historyUpdateExecuted) {
      // We temporarily disable window.history.pushState for one tick
      // This is the tick in which Next.js will try to update the history
      (0, _disableHistoryPushStateForOneTick.disableHistoryPushStateForOneTick)();
    } // We directly sign off the event handler we are in -> I love Javascript


    router.events.off("beforeHistoryChange", disableChangeStateAndRewrite);
  });
};

exports.addRewriteToRouterOnce = addRewriteToRouterOnce;