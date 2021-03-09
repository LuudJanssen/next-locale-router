export var disableHistoryPushStateForOneTick = function disableHistoryPushStateForOneTick() {
  var pushState = window.history.pushState;

  window.history.pushState = function () {};

  setTimeout(function () {
    window.history.pushState = pushState;
  });
};