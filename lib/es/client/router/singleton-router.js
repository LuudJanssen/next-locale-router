import SingletonNextRouter from "next/router";
import { wrapRouterWithRewrites } from "./util/wrap-router-with-rewrites";
export const SingletonRouter = wrapRouterWithRewrites(SingletonNextRouter);