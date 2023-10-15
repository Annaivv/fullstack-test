import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContent, Overlay } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>This is my modal</ModalContent>
    </Overlay>,
    modalRoot
  );
};
