"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParameters = void 0;
const querystring_1 = require("querystring");
const getQueryParameters = (url) => {
    const search = url.search;
    if (search === "" || search === "?") {
        return {};
    }
    const query = search.startsWith("?") ? search.substring(1) : search;
    return querystring_1.parse(query);
};
exports.getQueryParameters = getQueryParameters;
