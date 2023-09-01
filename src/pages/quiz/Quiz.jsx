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
  const [responses, setResponses] = useState({
    questions: [],
    correctAnswers: [],
    incorrectAnswers: [],
    selectedAnswers: [],
    category: [],
  });

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
        <Modal score={score} responses={responses} />
      ) : questionData.length ? (
        <QuestionCard
          questionData={questionData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          setShowModal={setShowModal}
          setResponses={setResponses}
          responses={responses}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Quiz;
