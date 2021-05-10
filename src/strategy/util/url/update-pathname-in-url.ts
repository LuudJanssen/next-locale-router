import { format, parse } from "url"

export const updatePathnameInUrl = (url: string, pathname: string): string => {
  const { pathname: originalPathname, path, href, ...urlObject } = parse(url)

  return format({
    ...urlObject,
    pathname,
  })
}
