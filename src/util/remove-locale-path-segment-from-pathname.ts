export const removeLocalePathSegmentFromPathname = (pathname: string, locale: string) => {
  if (pathname === "/") {
    return pathname
  }

  const pathWithoutStartingSlash = pathname.startsWith("/") ? pathname.substring(1) : pathname

  const pathWithoutLocale = pathWithoutStartingSlash.startsWith(locale)
    ? pathWithoutStartingSlash.substring(locale.length)
    : pathWithoutStartingSlash

  if (pathWithoutLocale === "") {
    return "/"
  }

  return pathWithoutLocale
}
