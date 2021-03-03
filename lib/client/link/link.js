"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const link_1 = __importDefault(require("next/link"));
const router_1 = require("next/router");
const react_1 = __importStar(require("react"));
const get_locale_redirects_1 = require("../../util/get-locale-redirects");
const config_1 = require("../config");
const get_locale_rewriter_child_1 = require("./util/get-locale-rewriter-child");
const get_locale_rewriter_href_1 = require("./util/get-locale-rewriter-href");
const locale_rewriter_props_type_1 = require("./util/locale-rewriter-props.type");
const wrap_click_handler_with_rewrite_1 = require("./util/wrap-click-handler-with-rewrite");
const LinkLocaleRewriter = react_1.forwardRef(({ children, ...props }, ref) => {
    // next/link forces these props on its child component
    // They'll only be available when this component is the child of next/link
    const { onClick: originalOnClick, href: originalHref, locale, ...childProps } = locale_rewriter_props_type_1.verifyLocaleRewriterProps(props);
    const { domains } = config_1.useLocaleRouterConfig();
    const redirects = domains.flatMap(get_locale_redirects_1.getLocaleRedirects);
    const redirectForLocale = redirects.find(({ locale: redirectLocale }) => redirectLocale === locale);
    const href = get_locale_rewriter_href_1.getLocaleRewriterHref(originalHref, redirectForLocale);
    const child = get_locale_rewriter_child_1.getLocaleRewriterChild(children);
    const onClick = wrap_click_handler_with_rewrite_1.wrapClickHandlerWithRewrite(originalOnClick, redirectForLocale);
    return react_1.default.cloneElement(child, { ...childProps, onClick, href, ref });
});
const Link = ({ children, ...props }) => {
    const { locale: currentLocale } = router_1.useRouter();
    return (react_1.default.createElement(link_1.default, Object.assign({}, props, { passHref: true }),
        react_1.default.createElement(LinkLocaleRewriter, { locale: props.locale || currentLocale }, children)));
};
exports.Link = Link;
