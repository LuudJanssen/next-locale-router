import { useRouter as useNextRouter } from "next/router";
import { wrapRouterWithRewrites } from "./util/wrap-router-with-rewrites";
export var useRouter = function useRouter() {
  var nextRouter = useNextRouter();
  return wrapRouterWithRewrites(nextRouter);
};