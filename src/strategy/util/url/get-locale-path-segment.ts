import { URL } from "url"
import { IDomain } from "../../../domain.interface"
import { getLocalePathSegmentsForDomain } from "../../../util/get-locale-path-segments-for-locale"
import { getPathSegments } from "./get-path-segments"

export const getLocalePathSegment = (validDomains: IDomain[], url: URL) => {
  const pathSegments = getPathSegments(url.pathname)
  const [expectedLocalePathSegment] = pathSegments

  if (typeof expectedLocalePathSegment === "undefined") {
    return undefined
  }

  const localePathSegments = validDomains.flatMap(getLocalePathSegmentsForDomain)
  const isLocaleRelatedSegment = localePathSegments.includes(expectedLocalePathSegment)

  if (!isLocaleRelatedSegment) {
    return undefined
  }

  return expectedLocalePathSegment
}
