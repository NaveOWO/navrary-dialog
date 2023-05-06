import { PropsWithChildren } from "react";
export declare const ModalContext: import("react").Context<{
    isOpen: boolean;
    openLocalModal: () => void;
    closeLocalModal: () => void;
}>;
interface ModalState {
    modalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}
interface ModalProviderProps {
    modalState?: ModalState;
    defaultOpen: boolean;
}
export declare function ModalProvider(props: PropsWithChildren<ModalProviderProps>): import("react/jsx-runtime").JSX.Element;
export {};
