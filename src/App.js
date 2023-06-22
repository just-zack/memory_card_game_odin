import "./modules/styles/App.css";
import Title from "./modules/title";
import Scores from "./modules/scores";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [scores, setScores] = useState({ currentScore: 0, highestScore: 0 });

  return (
    <div className="App">
      <Title />
      <Scores scores={scores} />
    </div>
  );
}

export default App;
