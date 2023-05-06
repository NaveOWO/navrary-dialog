import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { ModalContext } from "./modalContext";
import { getCustomElement } from "./custumElement";
export function ModalContent(props) {
    var children = props.children, _a = props.asChild, asChild = _a === void 0 ? false : _a;
    var isOpen = useContext(ModalContext).isOpen;
    var customElement = getCustomElement(asChild, children, props);
    if (customElement) {
        return isOpen ? customElement : null;
    }
    return isOpen ? _jsx(_Fragment, { children: children }) : null;
}
