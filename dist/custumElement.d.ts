import { Attributes, ForwardedRef, HTMLAttributes } from "react";
type WithRef<T> = (Partial<T> & Attributes) & {
    ref?: ForwardedRef<Unpack<T>>;
};
type Unpack<T> = T extends HTMLAttributes<infer U> ? U : T;
export declare function getCustomElement<T>(asChild: boolean, children: React.ReactElement[] | React.ReactElement | undefined, props: WithRef<T>): import("react").ReactElement<T, string | import("react").JSXElementConstructor<any>> | undefined;
export {};
