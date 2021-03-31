import { useRouter } from "next/router"
import { IRedirect } from "../../../server/util/redirect.interface"
import { addRewriteToRouterOnce } from "../../util/add-rewrite-to-router-once"
import { ReplaceableHistoryMethods } from "../../util/replaceable-history-methods.type"

export const wrapClickHandlerWithRewrite = (
  onClick: React.MouseEventHandler,
  method: ReplaceableHistoryMethods,
  rewrite?: IRedirect,
): React.MouseEventHandler => {
  const router = useRouter()

  if (typeof rewrite === "undefined") {
    return onClick
  }

  return (...args) => {
    addRewriteToRouterOnce(router, rewrite, method)
    onClick(...args)
  }
}
