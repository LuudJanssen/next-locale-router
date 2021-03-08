"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const link_1 = __importDefault(require("next/link"));
const router_1 = require("next/router");
const react_1 = __importDefault(require("react"));
const Link = (props) => {
    const { locale } = router_1.useRouter();
    return react_1.default.createElement(link_1.default, Object.assign({}, props, { href: `/${locale}${props.href}` }));
};
exports.Link = Link;
