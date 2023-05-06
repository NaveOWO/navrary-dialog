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
import { createContext, useEffect, useState } from "react";
export var ModalContext = createContext({
    isOpen: false,
    openLocalModal: function () { },
    closeLocalModal: function () { },
});
export function ModalProvider(props) {
    var _a;
    var modalState = props.modalState, _b = props.defaultOpen, defaultOpen = _b === void 0 ? false : _b, children = props.children;
    var _c = useState((_a = modalState === null || modalState === void 0 ? void 0 : modalState.modalOpen) !== null && _a !== void 0 ? _a : false), isOpen = _c[0], setIsOpen = _c[1];
    useEffect(function () {
        if (defaultOpen) {
            setIsOpen(true);
        }
    }, []);
    function openLocalModal() {
        setIsOpen(true);
        modalState === null || modalState === void 0 ? void 0 : modalState.openModal();
    }
    function closeLocalModal() {
        setIsOpen(false);
        modalState === null || modalState === void 0 ? void 0 : modalState.closeModal();
    }
    return (_jsx(ModalContext.Provider, __assign({ value: { isOpen: isOpen, openLocalModal: openLocalModal, closeLocalModal: closeLocalModal } }, { children: children })));
}
