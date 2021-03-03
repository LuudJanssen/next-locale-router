import { IDomain } from "../domain.interface"
import { IRedirect } from "./redirect.interface"

export const getLocaleRedirects = (domain: IDomain): IRedirect[] =>
  domain.subpaths
    .map(({ locale, path }) => ({
      source: `/${locale}/`,
      locale: locale,
      destination: path,
    }))
    .filter(({ source, destination }) => source !== destination)
