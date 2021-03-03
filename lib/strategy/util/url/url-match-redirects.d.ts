import { URL } from "url";
import { IRedirect } from "../../../util/redirect.interface";
export declare const urlMatchRedirects: (url: URL, redirects: IRedirect[]) => IRedirect | undefined;
