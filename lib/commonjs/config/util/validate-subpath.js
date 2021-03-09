"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSubpath = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.string.starts-with.js");

require("core-js/modules/es.string.ends-with.js");

var _isLocale = _interopRequireDefault(require("validator/lib/isLocale"));

var _getObjectType = require("../../util/get-object-type");

var _isObject = require("../../util/is-object");

var _configValidation = require("./config-validation.error");

var validateSubpath = function validateSubpath(subpath, locationPrefix) {
  if (!(0, _isObject.isObject)(subpath)) {
    var type = (0, _getObjectType.getObjectType)(subpath);
    throw new _configValidation.ConfigValidationError("Each subpath in a domain should be an object. Found ".concat(locationPrefix, " to be \"").concat(type, "\"."));
  }

  if (typeof subpath.path !== "string") {
    throw new _configValidation.ConfigValidationError("A subpath's path should be a valid string. Found ".concat(locationPrefix, ".path to be \"").concat((0, _typeof2["default"])(subpath.path), "\"."));
  }

  if (!subpath.path.startsWith("/") || !subpath.path.endsWith("/")) {
    throw new _configValidation.ConfigValidationError("A subpath's path should always start with a slash and end with a slash. Found \"".concat(subpath.path, "\" for ").concat(locationPrefix, ".path."));
  }

  if (typeof subpath.locale !== "string" || !(0, _isLocale["default"])(subpath.locale)) {
    throw new _configValidation.ConfigValidationError("A subpath's locale should be a valid locale. Found ".concat(locationPrefix, ".locale to be ").concat(subpath.locale));
  }

  return true;
};

exports.validateSubpath = validateSubpath;