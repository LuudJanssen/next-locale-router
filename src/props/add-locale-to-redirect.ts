import { Redirect } from "next"
import { useConfig } from "../client/config/use-config.hook"
import { updateUrlWithRedirect } from "../strategy/util/url/update-url-with-redirect"
import { getLocaleRedirectByLocale } from "../util/get-locale-redirect-by-locale"

export const addLocaleToRedirect = (redirect: Redirect, locale: string): Redirect => {
  const config = useConfig()
  const { destination, ...redirectOptions } = redirect
  const localeRedirect = getLocaleRedirectByLocale(config.domains, locale)

  if (typeof localeRedirect === "undefined") {
    return redirect
  }

  const newDestination = updateUrlWithRedirect(destination, localeRedirect)

  return {
    destination: newDestination,
    ...redirectOptions,
  }
}
