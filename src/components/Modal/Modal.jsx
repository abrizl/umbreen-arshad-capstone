import React from "react";
import closeButton from '../../assets/icons/close.svg';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButtonStyle}>
          <img src={closeButton} alt="Close button"/>  
        </button>
        {children}
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
  textAlign: "center",
  position: "relative",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  border: "none",
  background: "none",
  fontSize: "18px",
  cursor: "pointer",
};

export default Modal;