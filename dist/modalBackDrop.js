var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "./modalContext";
import { getCustomElement } from "./custumElement";
export function ModalBackDrop(props) {
    var _a = props.asChild, asChild = _a === void 0 ? false : _a, children = props.children;
    var _b = useContext(ModalContext), isOpen = _b.isOpen, closeLocalModal = _b.closeLocalModal;
    var customElement = getCustomElement(asChild, children, props);
    window.addEventListener("keyup", function () {
        closeLocalModal();
    });
    if (customElement) {
        return isOpen ? customElement : null;
    }
    return isOpen ? (_jsx(DefaultModalBackdropStyle, { onClick: closeLocalModal })) : null;
}
var DefaultModalBackdropStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100vh;\n\n  background-color: rgb(0, 0, 0, 0.5);\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100vh;\n\n  background-color: rgb(0, 0, 0, 0.5);\n"])));
var templateObject_1;
