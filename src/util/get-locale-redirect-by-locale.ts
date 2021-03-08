import { IDomain } from "../domain.interface"
import { getDomainByLocale } from "./get-domain-by-locale"
import { getLocaleRedirects } from "./get-locale-redirects"
import { IRedirect } from "./redirect.interface"

export const getLocaleRedirectByLocale = (domains: IDomain[], locale: string): IRedirect => {
  const domain = getDomainByLocale(domains, locale)
  const localeRedirects = getLocaleRedirects(domain)

  return localeRedirects.find(({ locale: redirectLocale }) => redirectLocale === locale)!
}
