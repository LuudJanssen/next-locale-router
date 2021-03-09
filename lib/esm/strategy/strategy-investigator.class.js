import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import { logger } from "../logger";
import { getLocaleRedirects } from "../util/get-locale-redirects";
import { getSubpathByLocale } from "../util/get-subpath-by-locale";
import { ChainablePassThroughStrategy as Passthrough } from "./chainable";
import { createRedirect } from "./util/create-redirect";
import { createRedirectToDomain } from "./util/create-redirect-to-domain";
import { createRender } from "./util/create-render";
import { getRequestUrl } from "./util/request/get-request-url";
import { isInternalNextRequest } from "./util/request/is-internal-next-request";
import { negotiateLocale } from "./util/request/negotiate-locale";
import { subpathNeedsRedirect } from "./util/url/subpath-needs-redirect";
import { urlMatchDomains } from "./util/url/url-match-domains";
import { urlMatchRedirects } from "./util/url/url-match-redirects";
import { urlMatchSubpaths } from "./util/url/url-match-subpaths";
export var StrategyInvestigator = /*#__PURE__*/function () {
  function StrategyInvestigator(config) {
    _classCallCheck(this, StrategyInvestigator);

    this.config = config;
  }

  _createClass(StrategyInvestigator, [{
    key: "determineStrategy",
    value: function determineStrategy(request) {
      var url = getRequestUrl(request);
      return this.getStrategy(request).log(url).serialize();
    }
  }, {
    key: "getStrategy",
    value: function getStrategy(request) {
      var url = getRequestUrl(request);

      if (isInternalNextRequest(url)) {
        return new Passthrough();
      }

      if (this.config.shouldIgnore(url)) {
        return new Passthrough();
      }

      var domain = this.config.getDomainByHostname(request.hostname);

      if (typeof domain === "undefined") {
        logger.error("The locale routing configuration didn't contain configuration for hostname \"".concat(request.hostname, "\". Falling back to passthrough strategy."));
        return new Passthrough();
      }

      var nextLocaleRedirects = getLocaleRedirects(domain);
      var matchedRedirect = urlMatchRedirects(url, nextLocaleRedirects);

      if (typeof matchedRedirect !== "undefined") {
        return createRedirect(url, matchedRedirect);
      }

      var matchedLocaleSubpath = urlMatchSubpaths(url, domain.subpaths);

      if (typeof matchedLocaleSubpath !== "undefined") {
        return createRender(url, matchedLocaleSubpath, domain);
      }

      var matchedDomain = urlMatchDomains(url, this.config.domains);

      if (typeof matchedDomain !== "undefined") {
        return createRedirectToDomain(url, matchedDomain);
      }

      var negotiatedLocale = negotiateLocale(request, domain);
      var negotiatedSubpath = getSubpathByLocale([domain], negotiatedLocale);

      if (subpathNeedsRedirect(url, negotiatedSubpath)) {
        return createRedirect(url, {
          source: "/",
          destination: negotiatedSubpath.path,
          locale: negotiatedLocale
        });
      }

      return new Passthrough();
    }
  }]);

  return StrategyInvestigator;
}();