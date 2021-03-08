import { NextRouter, useRouter as useNextRouter } from "next/router"
import { wrapRouterWithRewrites } from "./util/wrap-router-with-rewrites"

export const useRouter = (): NextRouter => {
  const nextRouter = useNextRouter()
  return wrapRouterWithRewrites(nextRouter)
}
