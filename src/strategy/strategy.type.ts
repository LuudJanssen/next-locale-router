import { StrategyType } from "./strategy-type.enum"

export interface PassThroughStrategy {
  type: StrategyType.PASSTHROUGH
}

export interface PermanentRedirectStrategyData {
  url: string
}
export interface PermanentRedirectStrategy {
  type: StrategyType.PERMANENT_REDIRECT
  data: PermanentRedirectStrategyData
}

export interface RenderStrategyData {
  path: string
}

export interface RenderStrategy {
  type: StrategyType.RENDER
  data: RenderStrategyData
}

export type Strategy = PassThroughStrategy | PermanentRedirectStrategy | RenderStrategy
