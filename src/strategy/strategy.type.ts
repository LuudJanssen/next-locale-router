import { ParsedUrlQuery } from "querystring"

export enum StrategyType {
  PASSTHROUGH = "PASSTHROUGH",
  PERMANENT_REDIRECT = "PERMANENT_REDIRECT",
  RENDER = "RENDER",
}

export interface PassThroughStrategy {
  type: StrategyType.PASSTHROUGH
}

export interface PermanentRedirectStrategyData {
  location: string
}

export interface PermanentRedirectStrategy {
  type: StrategyType.PERMANENT_REDIRECT
  data: PermanentRedirectStrategyData
}

export interface RenderStrategyQueryParameters extends ParsedUrlQuery {
  __nextLocale: string
  __nextDefaultLocale: string
}

export interface RenderStrategyData {
  pathname: string
  query: RenderStrategyQueryParameters
}

export interface RenderStrategy {
  type: StrategyType.RENDER
  data: RenderStrategyData
}

export type Strategy = PassThroughStrategy | PermanentRedirectStrategy | RenderStrategy
