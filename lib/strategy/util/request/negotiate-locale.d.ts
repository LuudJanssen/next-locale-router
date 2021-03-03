import { Request } from "express";
import { IDomain } from "../../../domain.interface";
export declare const negotiateLocale: (request: Request, domain: IDomain) => string;
