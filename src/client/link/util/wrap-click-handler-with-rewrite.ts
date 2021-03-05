import { useRouter } from "next/router"
import { IRedirect } from "../../../util/redirect.interface"
import { addRewriteToRouterOnce } from "../../util/add-rewrite-to-router-once"

export const wrapClickHandlerWithRewrite = (
  onClick: React.MouseEventHandler,
  rewrite?: IRedirect,
): React.MouseEventHandler => {
  const router = useRouter()

  if (typeof rewrite === "undefined") {
    return onClick
  }

  return (...args) => {
    addRewriteToRouterOnce(router, rewrite)
    onClick(...args)
  }
}
