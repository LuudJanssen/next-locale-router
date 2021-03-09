import { NextRouter } from "next/router"
import { addRewriteToRouterOnce } from "../../util/add-rewrite-to-router-once"
import { useLocaleRedirect } from "../../util/use-locale-redirect.hook"
import { updateAsParameterWithLocale } from "./update-as-parameter-with-locale"

type WrappableRouterMethods = "push" | "replace"

export const wrapRouterMethodWithLocaleRewrite = <TMethod extends WrappableRouterMethods>(
  router: NextRouter,
  method: TMethod,
): NextRouter[TMethod] => (...args) => {
  const [url, as, options] = args
  const redirectForLocale = useLocaleRedirect(router.locale)
  const asWithLocale = updateAsParameterWithLocale(as, redirectForLocale)
  addRewriteToRouterOnce(router, redirectForLocale)
  return router[method](url, asWithLocale, options)
}
