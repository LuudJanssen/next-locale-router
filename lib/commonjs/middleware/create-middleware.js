"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMiddleware = void 0;

var _ = require("..");

var createMiddleware = function createMiddleware(config, app) {
  var localeStrategyInvestigator = new _.LocaleStrategyInvestigator(config);
  var localeStrategyHandler = new _.LocaleStrategyHandler(app);
  return function (request, response, next) {
    var strategy = localeStrategyInvestigator.determineStrategy(request);
    return localeStrategyHandler.handleStrategy(strategy, request, response, next);
  };
};

exports.createMiddleware = createMiddleware;