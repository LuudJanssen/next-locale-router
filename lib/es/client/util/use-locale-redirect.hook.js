import { getLocaleRedirects } from "../../util/get-locale-redirects";
import { useLocaleRouterConfig } from "../config";
export const useLocaleRedirect = locale => {
  const {
    domains,
    defaultLocale
  } = useLocaleRouterConfig();
  const redirects = domains.flatMap(getLocaleRedirects);
  return redirects.find(({
    locale: redirectLocale
  }) => redirectLocale === locale ?? defaultLocale);
};