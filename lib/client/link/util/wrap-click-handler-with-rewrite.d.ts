import { IRedirect } from "../../../util/redirect.interface";
export declare const wrapClickHandlerWithRewrite: (onClick: React.MouseEventHandler, redirect?: IRedirect | undefined) => React.MouseEventHandler;