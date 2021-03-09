"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRender = void 0;
const chainable_1 = require("../chainable");
const get_query_parameters_1 = require("./url/get-query-parameters");
const get_render_query_parameters_1 = require("./url/get-render-query-parameters");
const strip_locale_path_segment_1 = require("./url/strip-locale-path-segment");
const strip_trailing_slash_1 = require("./url/strip-trailing-slash");
const createRender = (url, subpath, domain) => {
    const queryParameters = get_query_parameters_1.getQueryParameters(url);
    const query = {
        ...queryParameters,
        ...get_render_query_parameters_1.getRenderQueryParameters(subpath.locale, domain),
    };
    const pathname = strip_trailing_slash_1.stripTrailingSlash(strip_locale_path_segment_1.stripLocalePathSegment(url.pathname, subpath));
    return new chainable_1.ChainableRenderStrategy({
        pathname,
        query,
    });
};
exports.createRender = createRender;
