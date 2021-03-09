import { NextRouter } from "next/router";
declare type WrappableRouterMethods = "push" | "replace";
export declare const wrapRouterMethodWithLocaleRewrite: <TMethod extends WrappableRouterMethods>(router: NextRouter, method: TMethod) => NextRouter[TMethod];
export {};
