"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripLocalePathSegment = void 0;
const stripLocalePathSegment = (pathname, subpath) => {
    const normalizedPathname = pathname.endsWith("/") ? pathname : pathname + "/";
    return normalizedPathname.replace(subpath.path, "/");
};
exports.stripLocalePathSegment = stripLocalePathSegment;
