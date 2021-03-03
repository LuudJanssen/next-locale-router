import { URL } from "url";
import { IDomain } from "../../domain.interface";
import { ChainablePermanentRedirectStrategy as PermanentRedirect } from "../chainable";
export declare const createRedirectToDomain: (url: URL, domain: IDomain) => PermanentRedirect;
