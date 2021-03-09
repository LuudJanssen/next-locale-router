import { URL } from "url";
import { IRedirect } from "../../util/redirect.interface";
import { ChainablePermanentRedirectStrategy as PermanentRedirect } from "../chainable";
export declare const createRedirect: (url: URL, redirect: IRedirect) => PermanentRedirect;
