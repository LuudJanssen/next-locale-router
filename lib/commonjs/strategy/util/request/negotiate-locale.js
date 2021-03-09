"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.negotiateLocale = void 0;

var _logger = require("../../../logger");

var _getLocalesForDomains = require("../../../util/get-locales-for-domains");

var _extractLocaleFromHeader = require("./extract-locale-from-header");

var _extractNextLocaleCookie = require("./extract-next-locale-cookie");

var negotiateLocale = function negotiateLocale(request, domain) {
  var locales = (0, _getLocalesForDomains.getLocalesForDomains)([domain]);

  if (locales.length === 1) {
    _logger.logger.debug("Language negotiation was skipped because this domain only contains \"".concat(locales[0], "\" as a locale, which was returned."));

    return locales[0];
  }

  var forcedLocale = (0, _extractNextLocaleCookie.extractNextLocaleCookie)(request, locales);

  if (typeof forcedLocale === "string") {
    _logger.logger.debug("Language negotiation succeeded through Next.js cookie and returned \"".concat(forcedLocale, "\"."));

    return forcedLocale;
  }

  var negotiatedLocale = (0, _extractLocaleFromHeader.extractLocaleFromHeader)(request, locales);

  if (typeof negotiatedLocale === "string") {
    _logger.logger.debug("Language negotiation succeeded through the request headers and returned \"".concat(negotiatedLocale, "'."));

    return negotiatedLocale;
  }

  _logger.logger.debug("Language negotiation didn't yield a result and the defaultLocale \"".concat(domain.defaultLocale, "\" was returned."));

  return domain.defaultLocale;
};

exports.negotiateLocale = negotiateLocale;