"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConfig = void 0;

var _config = _interopRequireDefault(require("next/config"));

var _configRuntimeKey = require("../../constants/config-runtime-key.constant");

var useConfig = function useConfig() {
  var _getConfig = (0, _config["default"])(),
      publicRuntimeConfig = _getConfig.publicRuntimeConfig;

  return publicRuntimeConfig[_configRuntimeKey.CONFIG_RUNTIME_KEY];
};

exports.useConfig = useConfig;