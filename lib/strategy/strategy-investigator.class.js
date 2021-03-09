"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyInvestigator = void 0;
const logger_1 = require("../logger");
const get_locale_redirects_1 = require("../util/get-locale-redirects");
const get_subpath_by_locale_1 = require("../util/get-subpath-by-locale");
const chainable_1 = require("./chainable");
const create_redirect_1 = require("./util/create-redirect");
const create_redirect_to_domain_1 = require("./util/create-redirect-to-domain");
const create_render_1 = require("./util/create-render");
const get_request_url_1 = require("./util/request/get-request-url");
const is_internal_next_request_1 = require("./util/request/is-internal-next-request");
const negotiate_locale_1 = require("./util/request/negotiate-locale");
const subpath_needs_redirect_1 = require("./util/url/subpath-needs-redirect");
const url_match_domains_1 = require("./util/url/url-match-domains");
const url_match_redirects_1 = require("./util/url/url-match-redirects");
const url_match_subpaths_1 = require("./util/url/url-match-subpaths");
class StrategyInvestigator {
    constructor(config) {
        this.config = config;
    }
    determineStrategy(request) {
        const url = get_request_url_1.getRequestUrl(request);
        return this.getStrategy(request).log(url).serialize();
    }
    getStrategy(request) {
        const url = get_request_url_1.getRequestUrl(request);
        if (is_internal_next_request_1.isInternalNextRequest(url)) {
            return new chainable_1.ChainablePassThroughStrategy();
        }
        if (this.config.shouldIgnore(url)) {
            return new chainable_1.ChainablePassThroughStrategy();
        }
        const domain = this.config.getDomainByHostname(request.hostname);
        if (typeof domain === "undefined") {
            logger_1.logger.error(`The locale routing configuration didn't contain configuration for hostname "${request.hostname}". Falling back to passthrough strategy.`);
            return new chainable_1.ChainablePassThroughStrategy();
        }
        const nextLocaleRedirects = get_locale_redirects_1.getLocaleRedirects(domain);
        const matchedRedirect = url_match_redirects_1.urlMatchRedirects(url, nextLocaleRedirects);
        if (typeof matchedRedirect !== "undefined") {
            return create_redirect_1.createRedirect(url, matchedRedirect);
        }
        const matchedLocaleSubpath = url_match_subpaths_1.urlMatchSubpaths(url, domain.subpaths);
        if (typeof matchedLocaleSubpath !== "undefined") {
            return create_render_1.createRender(url, matchedLocaleSubpath, domain);
        }
        const matchedDomain = url_match_domains_1.urlMatchDomains(url, this.config.domains);
        if (typeof matchedDomain !== "undefined") {
            return create_redirect_to_domain_1.createRedirectToDomain(url, matchedDomain);
        }
        const negotiatedLocale = negotiate_locale_1.negotiateLocale(request, domain);
        const negotiatedSubpath = get_subpath_by_locale_1.getSubpathByLocale([domain], negotiatedLocale);
        if (subpath_needs_redirect_1.subpathNeedsRedirect(url, negotiatedSubpath)) {
            return create_redirect_1.createRedirect(url, {
                source: "/",
                destination: negotiatedSubpath.path,
                locale: negotiatedLocale,
            });
        }
        return new chainable_1.ChainablePassThroughStrategy();
    }
}
exports.StrategyInvestigator = StrategyInvestigator;
