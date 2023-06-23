export default function Game(
  selectionArray,
  currentScore,
  setCurrentScore,
  highestScore,
  setHighestScore
) {
  if (selectionArray.length > 1) {
    for (let i = 0; i < selectionArray.length; i++) {
      if (
        selectionArray.indexOf(selectionArray[i]) !==
        selectionArray.lastIndexOf(selectionArray[i])
      ) {
        alert("gameOver");
        setCurrentScore(0);
      }
    }
  }
  if (currentScore > highestScore) {
    setHighestScore(currentScore);
  }
}
