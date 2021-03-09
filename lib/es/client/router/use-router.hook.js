import { useRouter as useNextRouter } from "next/router";
import { wrapRouterWithRewrites } from "./util/wrap-router-with-rewrites";
export const useRouter = () => {
  const nextRouter = useNextRouter();
  return wrapRouterWithRewrites(nextRouter);
};