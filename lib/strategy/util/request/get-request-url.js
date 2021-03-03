"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestUrl = void 0;
const url_1 = require("url");
const getRequestUrl = (request) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const base = url_1.format({
        protocol,
        host,
        slashes: true,
    });
    return new url_1.URL(request.url, base);
};
exports.getRequestUrl = getRequestUrl;
