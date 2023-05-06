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
import { ModalProvider } from "./modalContext";
import { ModalBackDrop } from "./modalBackDrop";
import { ModalContent } from "./modalContent";
import { ModalTrigger } from "./modalTrigger";
export function ModalBox(props) {
    var _a = props.defaultOpen, defaultOpen = _a === void 0 ? false : _a, modalState = props.modalState, children = props.children;
    return (_jsx(ModalProvider, __assign({ modalState: modalState, defaultOpen: defaultOpen }, { children: children })));
}
export var Modal = Object.assign(ModalBox, {
    Backdrop: ModalBackDrop,
    Trigger: ModalTrigger,
    Content: ModalContent,
});
