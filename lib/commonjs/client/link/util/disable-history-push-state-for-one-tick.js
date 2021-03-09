"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disableHistoryPushStateForOneTick = void 0;

require("core-js/modules/web.timers.js");

var disableHistoryPushStateForOneTick = function disableHistoryPushStateForOneTick() {
  var pushState = window.history.pushState;

  window.history.pushState = function () {};

  setTimeout(function () {
    window.history.pushState = pushState;
  });
};

exports.disableHistoryPushStateForOneTick = disableHistoryPushStateForOneTick;