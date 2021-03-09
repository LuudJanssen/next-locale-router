import { addRewriteToRouterOnce } from "../../util/add-rewrite-to-router-once";
import { useLocaleRedirect } from "../../util/use-locale-redirect.hook";
export const wrapRouterMethodWithLocaleRewrite = (router, method) => (...args) => {
  const redirectForLocale = useLocaleRedirect(router.locale);
  addRewriteToRouterOnce(router, redirectForLocale);
  return router[method](...args);
};