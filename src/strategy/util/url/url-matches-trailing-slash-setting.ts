export const urlMatchesTrailingSlashSetting = (url: URL, shouldHaveTrailingSlash: boolean) => {
  const isOnlyTrailingSlash = url.pathname === "/"
  if (isOnlyTrailingSlash) {
    // Next.js doesn't respect the `trailingSlash` setting on the '/' route, it always has a trailing slash
    return true
  }

  const isEmptyRoute = url.pathname === ""
  if (isEmptyRoute) {
    // An empty route (without path) will always be redirected by Next.js
    return false
  }

  const hasTrailingSlash = url.pathname.endsWith("/")
  return hasTrailingSlash === shouldHaveTrailingSlash
}
