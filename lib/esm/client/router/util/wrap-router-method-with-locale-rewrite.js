import { addRewriteToRouterOnce } from "../../util/add-rewrite-to-router-once";
import { useLocaleRedirect } from "../../util/use-locale-redirect.hook";
export var wrapRouterMethodWithLocaleRewrite = function wrapRouterMethodWithLocaleRewrite(router, method) {
  return function () {
    var redirectForLocale = useLocaleRedirect(router.locale);
    addRewriteToRouterOnce(router, redirectForLocale);
    return router[method].apply(router, arguments);
  };
};