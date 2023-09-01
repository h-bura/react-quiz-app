import React, { useState } from "react";
import "./Introduce.css";
import quizImage from "../../images/quiz1.png";
import Dropdown from "../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import Categories from "../../components/categories/Categories";

function Introduce() {
  const difficultyOptions = ["easy", "medium", "hard"];
  const categoryOptions = [
    "Any Category",
    "General Knowledge",
    "Entertainments:Books",
    "Entertainments:Films",
    "Entertainments:Music",
    "Entertainments:Musicals & Theatres",
    "Entertainments:Television",
    "Entertainments:Video Games",
    "Entertainments:Board Games",
    "Sciene & Nature",
    "Sciene:Computers",
    "Sciene:Mathematics",
    "Mythology",
    "Sports",
    "Geograpfy",
    "History",
    "Politics",
    "Art",
    "Celebrites",
    "Animals",
    "Vehicles",
    "Entertainments:Comics",
    "Sciene:Gadgets",
    "Entertainments:Japanese Anime & Manga",
    "Entertainments:Cartoon & Animations",
  ];
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState(0);
  const navigate = useNavigate();
  const TOTEL_QUESTİONS = 10;
  const startQuiz = () => {
    if (difficulty) {
      navigate(`/quiz/${difficulty}/${TOTEL_QUESTİONS}/${category}`);
    }
  };
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img src={quizImage} alt="quiz" width={300} />
        <p>Zorluk Derecesi Seçin</p>
        <Dropdown data={difficultyOptions} setDifficulty={setDifficulty} />
        <p>Kategori Seçin</p>
        <Categories
          data={categoryOptions}
          setCategory={setCategory}
          category={category}
        />
        <div onClick={startQuiz} className="introduce-btn">
          Quiz e Başla
        </div>
      </div>
    </div>
  );
}

export default Introduce;
