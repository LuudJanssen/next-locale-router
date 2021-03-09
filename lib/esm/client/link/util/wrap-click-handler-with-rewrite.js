import { useRouter } from "next/router";
import { addRewriteToRouterOnce } from "../../util/add-rewrite-to-router-once";
export var wrapClickHandlerWithRewrite = function wrapClickHandlerWithRewrite(onClick, rewrite) {
  var router = useRouter();

  if (typeof rewrite === "undefined") {
    return onClick;
  }

  return function () {
    addRewriteToRouterOnce(router, rewrite);
    onClick.apply(void 0, arguments);
  };
};