import config from "../config"

export const isDebugMode = (): boolean => {
  const debugFlag = process.env.NEXT_PUBLIC_LOCALE_ROUTER_DEBUG
  return debugFlag === "true" || config.debug === true
}
