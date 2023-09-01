import React, { useEffect, useState } from "react";
import "./QuestionCard.css";

function QuestionCard({
  questionData,
  score,
  setScore,
  count,
  setCount,
  setShowModal,
  setResponses,
  responses,
}) {
  const [timer, setTimer] = useState(30);

  const approvedChoice = (e) => {
    const checkAnswer =
      e.currentTarget.value === questionData[count]?.correct_answer;
    if (checkAnswer) setScore(score + 10);
    setCount(count + 1);
    if (count === 9) setShowModal(true);
    setTimer(30);
    setResponses({
      ...responses,
      questions: [...responses.questions, questionData[count]?.question],
      correctAnswers: [
        ...responses.correctAnswers,
        questionData[count]?.correct_answer,
      ],
      incorrectAnswers: [
        ...responses.incorrectAnswers,
        questionData[count]?.incorrect_answers,
      ],
      selectedAnswers: [...responses.selectedAnswers, e.currentTarget.value],
      category: [...responses.category, questionData[count]?.category],
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) setTimer(timer - 1);
      if (timer === 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 10) setShowModal(true);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="questionCard">
      <div className="questionCard-timer">{timer}</div>
      <div className="questionCard-title">
        {count + 1}/10-{questionData[count]?.question}
      </div>
      {questionData[count]?.answers?.map((answer, i) => (
        <button key={i} value={answer} onClick={approvedChoice}>
          {answer}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;
