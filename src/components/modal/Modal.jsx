import React from "react";
import "./Modal.css";

function Modal({ score, responses }) {
  return (
    <div className="modal">
      <div className="modal-outcome">
        <h1>QUIZ SONUÇLARI</h1>
        {responses.questions.map((x, i) => (
          <div key={i}>
            <p className="modal-question">
              <span>
                {i + 1}-{x}({responses.category[i]})
              </span>
            </p>
            <div className="modal-answers">
              <p>SENIN CEVABIN: {responses.selectedAnswers[i]}/</p>
              <p>/DOGRU CEVAP: {responses.correctAnswers[i]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="modal-score">PUAN:{score}/100</div>

      <div onClick={() => (window.location = "/")} className="modal-btn">
        Teste Yeniden Başla
      </div>
    </div>
  );
}

export default Modal;
