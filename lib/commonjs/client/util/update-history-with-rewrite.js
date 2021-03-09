"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateHistoryWithRewrite = void 0;

var _updateUrlWithRedirect = require("../../strategy/util/url/update-url-with-redirect");

var updateHistoryWithRewrite = function updateHistoryWithRewrite(url, rewrite) {
  var newUrl = (0, _updateUrlWithRedirect.updateUrlWithRedirect)(url, rewrite);

  if (url === newUrl) {
    return false;
  }

  window.history.pushState(window.history.state, "", newUrl);
  return true;
};

exports.updateHistoryWithRewrite = updateHistoryWithRewrite;