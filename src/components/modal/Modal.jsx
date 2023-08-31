import React from "react";
import "./Modal.css";

function Modal({ score }) {
  return (
    <div className="modal">
      <div className="modal-title">Score:{score}</div>

      <div onClick={() => (window.location = "/")} className="modal-btn">
        Teste Yeniden Başla
      </div>
    </div>
  );
}

export default Modal;
