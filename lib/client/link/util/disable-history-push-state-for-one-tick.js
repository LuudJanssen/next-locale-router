"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableHistoryPushStateForOneTick = void 0;
const disableHistoryPushStateForOneTick = () => {
    const pushState = window.history.pushState;
    window.history.pushState = () => { };
    setTimeout(() => {
        window.history.pushState = pushState;
    });
};
exports.disableHistoryPushStateForOneTick = disableHistoryPushStateForOneTick;
