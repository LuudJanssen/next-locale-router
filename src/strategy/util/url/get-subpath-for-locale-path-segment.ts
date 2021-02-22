import { ISubpath } from "../../../subpath.interface"
import { subpathContainsLocalePath } from "./subpath-contains-locale-path"

export const getSubpathForLocalePathSegment = (subpaths: ISubpath[], localePathSegment: string) => {
  return subpaths.find(
    (subpath) =>
      subpath.locale === localePathSegment || subpathContainsLocalePath(subpath, localePathSegment),
  )
}
