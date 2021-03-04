"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanPathSegment = void 0;
const cleanPathSegment = (path) => path.replace(/\//g, "");
exports.cleanPathSegment = cleanPathSegment;
