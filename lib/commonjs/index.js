"use strict";

require("core-js/modules/es.object.define-property.js");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getConfig", {
  enumerable: true,
  get: function get() {
    return _config["default"];
  }
});
Object.defineProperty(exports, "withLocaleRouter", {
  enumerable: true,
  get: function get() {
    return _config.withLocaleRouter;
  }
});
Object.defineProperty(exports, "createLocaleMiddleware", {
  enumerable: true,
  get: function get() {
    return _createMiddleware.createMiddleware;
  }
});
Object.defineProperty(exports, "addLocaleToRedirect", {
  enumerable: true,
  get: function get() {
    return _addLocaleToRedirect.addLocaleToRedirect;
  }
});
Object.defineProperty(exports, "LocaleStrategyHandler", {
  enumerable: true,
  get: function get() {
    return _strategy.StrategyHandler;
  }
});
Object.defineProperty(exports, "LocaleStrategyInvestigator", {
  enumerable: true,
  get: function get() {
    return _strategy.StrategyInvestigator;
  }
});

var _config = _interopRequireWildcard(require("./config"));

var _createMiddleware = require("./middleware/create-middleware");

var _addLocaleToRedirect = require("./props/add-locale-to-redirect");

var _strategy = require("./strategy");