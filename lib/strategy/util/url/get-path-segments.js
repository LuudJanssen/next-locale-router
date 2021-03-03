"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathSegments = void 0;
const getPathSegments = (pathname) => pathname.split("/").filter((segment) => segment !== "");
exports.getPathSegments = getPathSegments;
