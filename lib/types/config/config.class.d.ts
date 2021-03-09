import { NextConfig } from "next/dist/next-server/server/config";
import { IConfig } from "../config.interface";
import { IDomain } from "../domain.interface";
import { ISubpath } from "../subpath.interface";
import { IgnoreFunction } from "./util/ignore-option.type";
export declare class Config {
    readonly domains: IDomain[];
    readonly defaultLocale: string;
    readonly ignore: IgnoreFunction;
    readonly locales: string[];
    readonly localeSubpaths: string[];
    constructor(config: IConfig);
    getDomain(locale: string): IDomain;
    getDomainByHostname(hostname: string): IDomain | undefined;
    getSubpath(locale: string): ISubpath | undefined;
    toNextI18nConfig(): NonNullable<NextConfig["i18n"]>;
    toObject(): IConfig;
    toNextI18NextConfig(): NonNullable<NextConfig["i18n"]>;
    shouldIgnore(url: URL): boolean;
}
