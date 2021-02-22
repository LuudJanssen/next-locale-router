import { StrategyType } from "./strategy-type.enum"

interface PassThroughStrategy {
  type: StrategyType.PASSTHROUGH
}

interface PermanentRedirectStrategy {
  type: StrategyType.PERMANENT_REDIRECT
  data: {
    url: string
  }
}

interface RenderStrategy {
  type: StrategyType.RENDER
  data: {
    path: string
  }
}

export type Strategy = PassThroughStrategy | PermanentRedirectStrategy | RenderStrategy
