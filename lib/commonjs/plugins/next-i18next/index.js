"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configToNextI18NextConfig = void 0;

var _getLocalesForDomains = require("../../util/get-locales-for-domains");

var configToNextI18NextConfig = function configToNextI18NextConfig(config) {
  return {
    locales: (0, _getLocalesForDomains.getLocalesForDomains)(config.domains),
    defaultLocale: config.defaultLocale
  };
};

exports.configToNextI18NextConfig = configToNextI18NextConfig;