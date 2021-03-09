"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrategyInvestigator = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _logger = require("../logger");

var _getLocaleRedirects = require("../util/get-locale-redirects");

var _getSubpathByLocale = require("../util/get-subpath-by-locale");

var _chainable = require("./chainable");

var _createRedirect = require("./util/create-redirect");

var _createRedirectToDomain = require("./util/create-redirect-to-domain");

var _createRender = require("./util/create-render");

var _getRequestUrl = require("./util/request/get-request-url");

var _isInternalNextRequest = require("./util/request/is-internal-next-request");

var _negotiateLocale = require("./util/request/negotiate-locale");

var _subpathNeedsRedirect = require("./util/url/subpath-needs-redirect");

var _urlMatchDomains = require("./util/url/url-match-domains");

var _urlMatchRedirects = require("./util/url/url-match-redirects");

var _urlMatchSubpaths = require("./util/url/url-match-subpaths");

var StrategyInvestigator = /*#__PURE__*/function () {
  function StrategyInvestigator(config) {
    (0, _classCallCheck2["default"])(this, StrategyInvestigator);
    this.config = config;
  }

  (0, _createClass2["default"])(StrategyInvestigator, [{
    key: "determineStrategy",
    value: function determineStrategy(request) {
      var url = (0, _getRequestUrl.getRequestUrl)(request);
      return this.getStrategy(request).log(url).serialize();
    }
  }, {
    key: "getStrategy",
    value: function getStrategy(request) {
      var url = (0, _getRequestUrl.getRequestUrl)(request);

      if ((0, _isInternalNextRequest.isInternalNextRequest)(url)) {
        return new _chainable.ChainablePassThroughStrategy();
      }

      if (this.config.shouldIgnore(url)) {
        return new _chainable.ChainablePassThroughStrategy();
      }

      var domain = this.config.getDomainByHostname(request.hostname);

      if (typeof domain === "undefined") {
        _logger.logger.error("The locale routing configuration didn't contain configuration for hostname \"".concat(request.hostname, "\". Falling back to passthrough strategy."));

        return new _chainable.ChainablePassThroughStrategy();
      }

      var nextLocaleRedirects = (0, _getLocaleRedirects.getLocaleRedirects)(domain);
      var matchedRedirect = (0, _urlMatchRedirects.urlMatchRedirects)(url, nextLocaleRedirects);

      if (typeof matchedRedirect !== "undefined") {
        return (0, _createRedirect.createRedirect)(url, matchedRedirect);
      }

      var matchedLocaleSubpath = (0, _urlMatchSubpaths.urlMatchSubpaths)(url, domain.subpaths);

      if (typeof matchedLocaleSubpath !== "undefined") {
        return (0, _createRender.createRender)(url, matchedLocaleSubpath, domain);
      }

      var matchedDomain = (0, _urlMatchDomains.urlMatchDomains)(url, this.config.domains);

      if (typeof matchedDomain !== "undefined") {
        return (0, _createRedirectToDomain.createRedirectToDomain)(url, matchedDomain);
      }

      var negotiatedLocale = (0, _negotiateLocale.negotiateLocale)(request, domain);
      var negotiatedSubpath = (0, _getSubpathByLocale.getSubpathByLocale)([domain], negotiatedLocale);

      if ((0, _subpathNeedsRedirect.subpathNeedsRedirect)(url, negotiatedSubpath)) {
        return (0, _createRedirect.createRedirect)(url, {
          source: "/",
          destination: negotiatedSubpath.path,
          locale: negotiatedLocale
        });
      }

      return new _chainable.ChainablePassThroughStrategy();
    }
  }]);
  return StrategyInvestigator;
}();

exports.StrategyInvestigator = StrategyInvestigator;