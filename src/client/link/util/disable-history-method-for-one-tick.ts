import { ReplaceableHistoryMethods } from "../../util/replaceable-history-methods.type"

export const disableHistoryMethodForOneTick = (method: ReplaceableHistoryMethods) => {
  const originalMethodHandler = window.history[method]
  window.history[method] = () => {}
  setTimeout(() => {
    window.history[method] = originalMethodHandler
  })
}
