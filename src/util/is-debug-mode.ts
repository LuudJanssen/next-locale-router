export const isDebugMode = (): boolean => {
  const debugFlag = process.env.NEXT_I18N_DEBUG

  if (typeof debugFlag === "undefined") {
    return false
  }

  return process.env.NEXT_I18N_DEBUG === "true"
}
