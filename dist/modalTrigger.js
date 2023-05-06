var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "./modalContext";
import { getCustomElement } from "./custumElement";
export function ModalTrigger(props) {
    var _a = props.asChild, asChild = _a === void 0 ? false : _a, children = props.children;
    var _b = useContext(ModalContext), isOpen = _b.isOpen, openLocalModal = _b.openLocalModal, closeLocalModal = _b.closeLocalModal;
    var customElement = getCustomElement(asChild, children, props);
    function toggleLocalModal() {
        isOpen ? closeLocalModal() : openLocalModal();
    }
    if (customElement) {
        return isOpen ? customElement : null;
    }
    return isOpen ? (_jsx(DefaultModaltriggerStyle, __assign({ onClick: toggleLocalModal }, { children: children }))) : null;
}
var DefaultModaltriggerStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var templateObject_1;
