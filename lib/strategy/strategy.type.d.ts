/// <reference types="node" />
import { ParsedUrlQuery } from "querystring";
export declare enum StrategyType {
    PASSTHROUGH = "PASSTHROUGH",
    PERMANENT_REDIRECT = "PERMANENT_REDIRECT",
    RENDER = "RENDER"
}
export interface PassThroughStrategy {
    type: StrategyType.PASSTHROUGH;
}
export interface PermanentRedirectStrategyData {
    location: string;
}
export interface PermanentRedirectStrategy {
    type: StrategyType.PERMANENT_REDIRECT;
    data: PermanentRedirectStrategyData;
}
export interface RenderStrategyQueryParameters extends ParsedUrlQuery {
    __nextLocale: string;
}
export interface RenderStrategyData {
    pathname: string;
    query: ParsedUrlQuery;
}
export interface RenderStrategy {
    type: StrategyType.RENDER;
    data: RenderStrategyData;
}
export declare type Strategy = PassThroughStrategy | PermanentRedirectStrategy | RenderStrategy;
