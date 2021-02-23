import { removeLocalePathSegmentFromPathname } from "../../../util/remove-locale-path-segment-from-pathname"

export const createRenderPathname = (
  currentPathname: string,
  localePathSegment: string,
  pathSegmentLocale?: string,
) => {
  if (typeof pathSegmentLocale === "undefined") {
    return currentPathname
  }

  return removeLocalePathSegmentFromPathname(currentPathname, localePathSegment)
}
