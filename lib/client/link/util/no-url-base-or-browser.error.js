"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoUrlBaseOrBrowserError = void 0;
class NoUrlBaseOrBrowserError extends Error {
    constructor() {
        super(...arguments);
        this.name = "NoUrlBaseOrBrowserError";
    }
}
exports.NoUrlBaseOrBrowserError = NoUrlBaseOrBrowserError;
