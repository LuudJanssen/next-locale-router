import { NextRouter } from "next/router"
import { addRewriteToRouterOnce } from "../../util/add-rewrite-to-router-once"
import { useLocaleRedirect } from "../../util/use-locale-redirect.hook"

type WrappableRouterMethods = "push" | "replace"

export const wrapRouterMethodWithLocaleRewrite = <TMethod extends WrappableRouterMethods>(
  router: NextRouter,
  method: TMethod,
): NextRouter[TMethod] => (...args) => {
  const redirectForLocale = useLocaleRedirect(router.locale)
  addRewriteToRouterOnce(router, redirectForLocale)
  return router[method](...args)
}
