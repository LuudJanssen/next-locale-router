"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocaleRewriterHref = void 0;

var _updateUrlWithRedirect = require("../../../strategy/util/url/update-url-with-redirect");

var getLocaleRewriterHref = function getLocaleRewriterHref(originalHref, redirectForLocale) {
  return redirectForLocale ? (0, _updateUrlWithRedirect.updateUrlWithRedirect)(originalHref, redirectForLocale) : originalHref;
};

exports.getLocaleRewriterHref = getLocaleRewriterHref;