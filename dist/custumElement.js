import { Children, cloneElement, isValidElement, } from "react";
export function getCustomElement(asChild, children, props) {
    if (asChild && isValidElement(children)) {
        var child = Children.only(children);
        return cloneElement(child, props);
    }
    return;
}
