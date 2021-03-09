export const disableHistoryPushStateForOneTick = () => {
  const pushState = window.history.pushState;

  window.history.pushState = () => {};

  setTimeout(() => {
    window.history.pushState = pushState;
  });
};