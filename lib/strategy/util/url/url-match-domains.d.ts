import { URL } from "url";
import { IDomain } from "../../../domain.interface";
export declare const urlMatchDomains: (url: URL, domains: IDomain[]) => IDomain | undefined;
