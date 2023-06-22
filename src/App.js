import "./styles/App.css";
import Title from "./modules/Title";
import Scores from "./modules/Scores";
import Card from "./modules/Card";
import { useState } from "react";

function App() {
  const [scores, setScores] = useState({ currentScore: 0, highestScore: 0 });

  return (
    <div className="App">
      <Title />
      <Scores scores={scores} />
      <Card />
    </div>
  );
}

export default App;
