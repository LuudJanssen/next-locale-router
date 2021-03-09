import { updateUrlWithRedirect } from "../../../strategy/util/url/update-url-with-redirect";
export var getLocaleRewriterHref = function getLocaleRewriterHref(originalHref, redirectForLocale) {
  return redirectForLocale ? updateUrlWithRedirect(originalHref, redirectForLocale) : originalHref;
};