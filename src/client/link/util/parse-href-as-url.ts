import { NoUrlBaseOrBrowserError } from "./no-url-base-or-browser.error"

interface HrefProperties {
  url: URL
  urlHadOrigin: boolean
}

export const parseHrefAsUrl = (href: string): HrefProperties => {
  let url: URL
  let urlHadOrigin: boolean
  try {
    url = new URL(href)
    urlHadOrigin = true
  } catch (error) {
    if (typeof window === "undefined") {
      throw new NoUrlBaseOrBrowserError()
    }

    url = new URL(href, window.location.origin)
    urlHadOrigin = false
  }

  return { url, urlHadOrigin }
}
