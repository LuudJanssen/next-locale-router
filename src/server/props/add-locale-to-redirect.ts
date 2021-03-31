import { Redirect } from "next"
import { useConfig } from "../../config"
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
