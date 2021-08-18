import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import "./Modal.scss";

export default function Modal({ children, onClose }) {
  const modalRoot = document.querySelector("#modal-root");

  useEffect(() => {
    window.addEventListener("keydown", handeleKeyDown);

    return () => {
      window.removeEventListener("keydown", handeleKeyDown);
    };
  });

  const handeleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handeleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handeleBackDropClick}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
