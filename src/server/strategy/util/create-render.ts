import { URL } from "url"
import { IDomain } from "../../domain.interface"
import { ISubpath } from "../../subpath.interface"
import { ChainableRenderStrategy as Render } from "../chainable"
import { getQueryParameters } from "./url/get-query-parameters"
import { getRenderQueryParameters } from "./url/get-render-query-parameters"
import { stripLocalePathSegment } from "./url/strip-locale-path-segment"
import { stripTrailingSlash } from "./url/strip-trailing-slash"

export const createRender = (url: URL, subpath: ISubpath, domain: IDomain): Render => {
  const queryParameters = getQueryParameters(url)

  const query = {
    ...queryParameters,
    ...getRenderQueryParameters(subpath.locale, domain),
  }

  const pathname = stripTrailingSlash(stripLocalePathSegment(url.pathname, subpath))

  return new Render({
    pathname,
    query,
  })
}
