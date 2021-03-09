import { updateUrlWithRedirect } from "../../strategy/util/url/update-url-with-redirect";
export var updateHistoryWithRewrite = function updateHistoryWithRewrite(url, rewrite) {
  var newUrl = updateUrlWithRedirect(url, rewrite);

  if (url === newUrl) {
    return false;
  }

  window.history.pushState(window.history.state, "", newUrl);
  return true;
};