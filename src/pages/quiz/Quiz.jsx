import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Modal from "../../components/modal/Modal";
import Loading from "../../components/loading/Loading";
function Quiz() {
  const { difficulty, amount, category } = useParams();
  const [questionData, setQuestionData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount, category);
      setQuestionData(data);
    };
    getData();
  }, []);
  return (
    <div className="quiz">
      {showModal ? (
        <Modal score={score} />
      ) : questionData.length ? (
        <QuestionCard
          questionData={questionData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Quiz;
