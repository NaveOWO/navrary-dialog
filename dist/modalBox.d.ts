import { PropsWithChildren } from "react";
import { ModalBackDrop } from "./modalBackDrop";
import { ModalContent } from "./modalContent";
import { ModalTrigger } from "./modalTrigger";
interface ModalState {
    modalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}
interface ModalProps {
    modalState?: ModalState;
    defaultOpen?: boolean;
}
export declare function ModalBox(props: PropsWithChildren<ModalProps>): import("react/jsx-runtime").JSX.Element;
export declare const Modal: typeof ModalBox & {
    Backdrop: typeof ModalBackDrop;
    Trigger: typeof ModalTrigger;
    Content: typeof ModalContent;
};
export {};
