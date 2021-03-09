import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { getDomainByHostname as _getDomainByHostname } from "../util/get-domain-by-hostname";
import { getDomainByLocale } from "../util/get-domain-by-locale";
import { getLocaleSubpathsForDomains } from "../util/get-locale-subpaths-for-domains";
import { getLocalesForDomains } from "../util/get-locales-for-domains";
import { getSubpathByLocale } from "../util/get-subpath-by-locale";
import { getSubpathsLocales } from "../util/get-subpaths-locales";
import { alwaysReturn } from "./util/always-return";
export var Config = /*#__PURE__*/function () {
  function Config(config) {
    var _config$ignore;

    _classCallCheck(this, Config);

    _defineProperty(this, "domains", void 0);

    _defineProperty(this, "defaultLocale", void 0);

    _defineProperty(this, "ignore", void 0);

    _defineProperty(this, "locales", void 0);

    _defineProperty(this, "localeSubpaths", void 0);

    this.domains = config.domains;
    this.defaultLocale = config.defaultLocale;
    this.ignore = (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 ? _config$ignore : alwaysReturn(false);
    this.locales = getLocalesForDomains(this.domains);
    this.localeSubpaths = getLocaleSubpathsForDomains(this.domains);
  }

  _createClass(Config, [{
    key: "getDomain",
    value: function getDomain(locale) {
      return getDomainByLocale(this.domains, locale);
    }
  }, {
    key: "getDomainByHostname",
    value: function getDomainByHostname(hostname) {
      return _getDomainByHostname(this.domains, hostname);
    }
  }, {
    key: "getSubpath",
    value: function getSubpath(locale) {
      return getSubpathByLocale(this.domains, locale);
    }
  }, {
    key: "toNextI18nConfig",
    value: function toNextI18nConfig() {
      var domains = this.domains.map(function (domain) {
        return {
          domain: domain.hostname,
          defaultLocale: domain.defaultLocale,
          locales: getSubpathsLocales(domain.subpaths)
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