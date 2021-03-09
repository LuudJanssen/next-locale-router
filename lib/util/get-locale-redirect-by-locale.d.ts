import { IDomain } from "../domain.interface";
import { IRedirect } from "./redirect.interface";
export declare const getLocaleRedirectByLocale: (domains: IDomain[], locale: string) => IRedirect | undefined;
