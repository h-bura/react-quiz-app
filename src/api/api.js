import he from "he";
const randomArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (difficulty, amount, category) => {
  try {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("API request failed"); // Handle the error
    }
    const data = await response.json();

    if (data.response_code !== 0) {
      throw new Error("API response error"); // Handle the error
    }
    return data.results.map((dt) => ({
      ...dt,
      question: he.decode(dt.question),
      answers: randomArray([...dt.incorrect_answers, dt.correct_answer]).map(
        (answer) => he.decode(answer.replace(/&#039;/g, "'"))
      ),
    }));
  } catch (error) {
    console.error("An error occure:", error.message);
    return [];
  }
};
