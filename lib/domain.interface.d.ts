import { ISubpath } from "./subpath.interface";
export interface IDomain {
    hostname: string;
    defaultLocale: string;
    subpaths: ISubpath[];
}
