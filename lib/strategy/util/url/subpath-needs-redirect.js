"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subpathNeedsRedirect = void 0;
const subpathNeedsRedirect = (url, subpath) => {
    return !url.pathname.startsWith(subpath.path);
};
exports.subpathNeedsRedirect = subpathNeedsRedirect;
