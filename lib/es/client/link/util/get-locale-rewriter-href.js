import { updateUrlWithRedirect } from "../../../strategy/util/url/update-url-with-redirect";
export const getLocaleRewriterHref = (originalHref, redirectForLocale) => {
  return redirectForLocale ? updateUrlWithRedirect(originalHref, redirectForLocale) : originalHref;
};