"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomainByLocale = void 0;

require("core-js/modules/es.array.find.js");

var _logger = require("../logger");

var _domainContainsLocale = require("./domain-contains-locale");

var getDomainByLocale = function getDomainByLocale(domains, locale) {
  var domain = domains.find(function (domain) {
    return (0, _domainContainsLocale.domainContainsLocale)(domain, locale);
  });

  if (typeof domain === "undefined") {
    var error = new Error("Domains in config didn't contain locale \"".concat(locale, "\"."));

    _logger.logger.error(error);

    throw error;
  }

  return domain;
};

exports.getDomainByLocale = getDomainByLocale;