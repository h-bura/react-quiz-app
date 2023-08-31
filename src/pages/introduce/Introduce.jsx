import React, { useState } from "react";
import "./Introduce.css";
import quizImage from "../../images/quiz1.png";
import Dropdown from "../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";

function Introduce() {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("easy");
  const navigate = useNavigate();
  const TOTEL_QUESTİONS = 10;
  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTEL_QUESTİONS}`);
    }
  };
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img src={quizImage} alt="" width={300} />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="introduce-btn">
          Quiz e Başla
        </div>
      </div>
    </div>
  );
}

export default Introduce;
