import { NextRouter } from "next/router";
import { IRedirect } from "../../../util/redirect.interface";
export declare const updateAsParameterWithLocale: (as: Parameters<NextRouter["replace"]>["1"], redirect: IRedirect) => string | undefined;
