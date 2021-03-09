"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateConfig = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _isLocale = _interopRequireDefault(require("validator/lib/isLocale"));

var _getLocalesForDomains = require("../../util/get-locales-for-domains");

var _getObjectType = require("../../util/get-object-type");

var _isObject = require("../../util/is-object");

var _configValidation = require("./config-validation.error");

var _validateDomain = require("./validate-domain");

var validateConfig = function validateConfig(config) {
  if (!(0, _isObject.isObject)(config)) {
    var type = (0, _getObjectType.getObjectType)(config);
    throw new _configValidation.ConfigValidationError("The config file should export an object, found \"".concat(type, "\"."));
  }

  if (typeof config.defaultLocale !== "string" || !(0, _isLocale["default"])(config.defaultLocale)) {
    throw new _configValidation.ConfigValidationError("The defaultLocale exported from the config file should be a valid locale. Found config.defaultLocale to be \"".concat(config.defaultLocale, "\"."));
  }

  if (!Array.isArray(config.domains)) {
    throw new _configValidation.ConfigValidationError("The domains exported from the config file should be an array. Found config.defaultLocale to be \"".concat((0, _typeof2["default"])(config.domains), "\"."));
  }

  if (typeof config.debug !== "undefined" && typeof config.debug !== "boolean") {
    throw new _configValidation.ConfigValidationError("The debug flag has to be either undefined or a boolean. Found config.debug to be \"".concat((0, _typeof2["default"])(config.debug), "\"."));
  }

  if (typeof config.debug !== "undefined" && typeof config.ignore !== "function") {
    throw new _configValidation.ConfigValidationError("The ignore option has to be either undefined or a boolean. Found config.ignore to be \"".concat((0, _typeof2["default"])(config.ignore), "\""));
  }

  config.domains.forEach(function (domain, index) {
    return (0, _validateDomain.validateDomain)(domain, "config.domains[".concat(index, "]"));
  });
  var locales = (0, _getLocalesForDomains.getLocalesForDomains)(config.domains);

  if (!locales.includes(config.defaultLocale)) {
    throw new _configValidation.ConfigValidationError("The defaultLocale exported from the config file should be a locale that also exists in one of the domains. No domain with locale \"".concat(config.defaultLocale, "\" exists in config.domains."));
  }

  return true;
};

exports.validateConfig = validateConfig;