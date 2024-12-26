import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  handleCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, handleCloseModal }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [handleCloseModal]);

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="modal-overlay fixed inset-0 bg-opacity-50 flex align-items-start justify-center "
      onClick={handleOverlayClick}
    >
      <div className="responsive-modal bg-light p-2 rounded ">
        {children}
      </div>
    </div>,
    document.getElementById("App") as HTMLElement
  );
};

export default Modal;
