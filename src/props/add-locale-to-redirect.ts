import { GetServerSidePropsResult, GetStaticPropsResult, Redirect } from "next"
import config from "../config"
import { updateUrlWithRedirect } from "../strategy/util/url/update-url-with-redirect"
import { getLocaleRedirectByLocale } from "../util/get-locale-redirect-by-locale"

type StaticOrNonStaticProps =
  | GetStaticPropsResult<Record<string, never>>
  | GetServerSidePropsResult<Record<string, never>>

export const addLocaleToRedirect = (redirect: Redirect, locale: string): StaticOrNonStaticProps => {
  const { destination, ...redirectOptions } = redirect
  const localeRedirect = getLocaleRedirectByLocale(config.domains, locale)
  const newDestination = updateUrlWithRedirect(destination, localeRedirect)

  return {
    redirect: {
      destination: newDestination,
      ...redirectOptions,
    },
  }
}
