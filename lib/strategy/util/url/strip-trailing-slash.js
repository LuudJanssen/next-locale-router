"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripTrailingSlash = void 0;
const stripTrailingSlash = (pathname) => {
    if (pathname === "/" || pathname === "") {
        return "/";
    }
    return pathname.endsWith("/") ? pathname.substring(0, pathname.length - 1) : pathname;
};
exports.stripTrailingSlash = stripTrailingSlash;
