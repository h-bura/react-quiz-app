import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduce from "./pages/introduce/Introduce";
import Quiz from "./pages/quiz/Quiz";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route
            path="/quiz/:difficulty/:amount/:category"
            element={<Quiz />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
