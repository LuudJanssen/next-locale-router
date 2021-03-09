"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = void 0;

require("core-js/modules/es.array.map.js");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _getDomainByHostname2 = require("../util/get-domain-by-hostname");

var _getDomainByLocale = require("../util/get-domain-by-locale");

var _getLocaleSubpathsForDomains = require("../util/get-locale-subpaths-for-domains");

var _getLocalesForDomains = require("../util/get-locales-for-domains");

var _getSubpathByLocale = require("../util/get-subpath-by-locale");

var _getSubpathsLocales = require("../util/get-subpaths-locales");

var _alwaysReturn = require("./util/always-return");

var Config = /*#__PURE__*/function () {
  function Config(config) {
    var _config$ignore;

    (0, _classCallCheck2["default"])(this, Config);
    (0, _defineProperty2["default"])(this, "domains", void 0);
    (0, _defineProperty2["default"])(this, "defaultLocale", void 0);
    (0, _defineProperty2["default"])(this, "ignore", void 0);
    (0, _defineProperty2["default"])(this, "locales", void 0);
    (0, _defineProperty2["default"])(this, "localeSubpaths", void 0);
    this.domains = config.domains;
    this.defaultLocale = config.defaultLocale;
    this.ignore = (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 ? _config$ignore : (0, _alwaysReturn.alwaysReturn)(false);
    this.locales = (0, _getLocalesForDomains.getLocalesForDomains)(this.domains);
    this.localeSubpaths = (0, _getLocaleSubpathsForDomains.getLocaleSubpathsForDomains)(this.domains);
  }

  (0, _createClass2["default"])(Config, [{
    key: "getDomain",
    value: function getDomain(locale) {
      return (0, _getDomainByLocale.getDomainByLocale)(this.domains, locale);
    }
  }, {
    key: "getDomainByHostname",
    value: function getDomainByHostname(hostname) {
      return (0, _getDomainByHostname2.getDomainByHostname)(this.domains, hostname);
    }
  }, {
    key: "getSubpath",
    value: function getSubpath(locale) {
      return (0, _getSubpathByLocale.getSubpathByLocale)(this.domains, locale);
    }
  }, {
    key: "toNextI18nConfig",
    value: function toNextI18nConfig() {
      var domains = this.domains.map(function (domain) {
        return {
          domain: domain.hostname,
          defaultLocale: domain.defaultLocale,
          locales: (0, _getSubpathsLocales.getSubpathsLocales)(domain.subpaths)
        };
      });
      return {
        localeDetection: false,
        locales: this.locales,
        defaultLocale: this.defaultLocale,
        domains: domains
      };
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        domains: this.domains,
        defaultLocale: this.defaultLocale
      };
    }
  }, {
    key: "toNextI18NextConfig",
    value: function toNextI18NextConfig() {
      var _this$toNextI18NextCo = this.toNextI18NextConfig(),
          locales = _this$toNextI18NextCo.locales,
          defaultLocale = _this$toNextI18NextCo.defaultLocale;

      return {
        locales: locales,
        defaultLocale: defaultLocale
      };
    }
  }, {
    key: "shouldIgnore",
    value: function shouldIgnore(url) {
      return this.ignore(url);
    }
  }]);
  return Config;
}();

exports.Config = Config;