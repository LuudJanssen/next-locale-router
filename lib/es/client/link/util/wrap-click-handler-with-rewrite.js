import { useRouter } from "next/router";
import { addRewriteToRouterOnce } from "../../util/add-rewrite-to-router-once";
export const wrapClickHandlerWithRewrite = (onClick, rewrite) => {
  const router = useRouter();

  if (typeof rewrite === "undefined") {
    return onClick;
  }

  return (...args) => {
    addRewriteToRouterOnce(router, rewrite);
    onClick(...args);
  };
};