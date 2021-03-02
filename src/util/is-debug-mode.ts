import config from "../config"

export const isDebugMode = (): boolean => {
  const debugFlag = process.env.NEXT_LOCALE_ROUTER_DEBUG

  if (typeof debugFlag === "undefined") {
    return false
  }

  return process.env.NEXT_LOCALE_ROUTER_DEBUG === "true" || config.debug === true
}
