import "./styles/App.css";
import Title from "./modules/Title";
import Scores from "./modules/Scores";
import Card from "./modules/Card";
import Footer from "./modules/footer";
import { useState } from "react";

function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectionArray, setSelectionArray] = useState([]);
  const [currentSelection, setCurrentSelection] = useState();

  function Game() {
    if (selectionArray.length > 1 && selectionArray.length < 12) {
      for (let i = 0; i < selectionArray.length; i++) {
        if (
          selectionArray.indexOf(selectionArray[i]) !==
          selectionArray.lastIndexOf(selectionArray[i])
        ) {
          alert("Game Over! Play Again");
          setCurrentScore(0);
          setSelectionArray([]);
          return;
        }
      }
    } else if (selectionArray.length === 12) {
      setSelectionArray([]);
      return;
    }
    if (currentScore > highestScore) {
      setHighestScore(currentScore);
    }
  }

  return (
    <div className="App">
      <Title />
      <Scores currentScore={currentScore} highestScore={highestScore} />
      <Card
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
        setSelectionArray={setSelectionArray}
        selectionArray={selectionArray}
        setCurrentSelection={setCurrentSelection}
        currentSelection={currentSelection}
      />
      {Game()}
      <Footer />
    </div>
  );
}

export default App;
