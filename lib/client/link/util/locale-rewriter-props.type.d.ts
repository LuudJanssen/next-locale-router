/// <reference types="react" />
interface NextLinkChildProps {
    onClick: React.MouseEventHandler;
    href?: string;
}
export declare type LocaleRewriterProps = React.PropsWithChildren<Partial<NextLinkChildProps>> & {
    locale?: string;
};
declare type LocaleRewriterPropsWithoutChildren = Omit<LocaleRewriterProps, "children">;
export declare const verifyLocaleRewriterProps: ({ locale, href, onClick, }: LocaleRewriterPropsWithoutChildren) => Required<LocaleRewriterPropsWithoutChildren>;
export {};
