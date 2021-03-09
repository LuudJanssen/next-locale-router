"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDomain = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

var _process = require("process");

var _isLocale = _interopRequireDefault(require("validator/lib/isLocale"));

var _getObjectType = require("../../util/get-object-type");

var _getSubpathsLocales = require("../../util/get-subpaths-locales");

var _isObject = require("../../util/is-object");

var _configValidation = require("./config-validation.error");

var _validateSubpath = require("./validate-subpath");

var validateDomain = function validateDomain(domain, locationPrefix) {
  if (!(0, _isObject.isObject)(domain)) {
    var type = (0, _getObjectType.getObjectType)(_process.config);
    throw new _configValidation.ConfigValidationError("Each domain in the domains array exported from the config file should be an object. Found ".concat(locationPrefix, " to be \"").concat(type, "\"."));
  }

  if (typeof domain.hostname !== "string") {
    throw new _configValidation.ConfigValidationError("Each domain's hostname should be a string. Found ".concat(locationPrefix, ".hostname to be \"").concat((0, _typeof2["default"])(domain.hostname), "\"."));
  }

  if (domain.hostname.includes("http")) {
    throw new _configValidation.ConfigValidationError("Each domain's hostname should not include the protocol (e.g. \"https://\" or \"http://\"). Found ".concat(locationPrefix, ".hostname to contain \"http\"."));
  }

  if (typeof domain.defaultLocale !== "string" || !(0, _isLocale["default"])(domain.defaultLocale)) {
    throw new _configValidation.ConfigValidationError("Each domain's defaultLocale should be a valid locale. Found ".concat(locationPrefix, ".defaultLocale to be \"").concat(domain.defaultLocale, "\"."));
  }

  if (!Array.isArray(domain.subpaths)) {
    throw new _configValidation.ConfigValidationError("Each domain's subpaths should be an array. Found ".concat(locationPrefix, ".subpaths to be \"").concat((0, _typeof2["default"])(domain.subpath), "\"."));
  }

  domain.subpaths.forEach(function (subpath, index) {
    return (0, _validateSubpath.validateSubpath)(subpath, "".concat(locationPrefix, ".subpaths[").concat(index, "]"));
  });
  var locales = (0, _getSubpathsLocales.getSubpathsLocales)(domain.subpaths);

  if (!locales.includes(domain.defaultLocale)) {
    throw new _configValidation.ConfigValidationError("Each domain's defaultLocale should be a locale that is also included in the subpaths. No subpath with locale \"".concat(domain.defaultLocale, "\" exists in ").concat(locationPrefix, ".subpaths."));
  }

  return true;
};

exports.validateDomain = validateDomain;