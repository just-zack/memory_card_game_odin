import "../styles/scores.css";

export default function Scores({ currentScore, highestScore }) {
  return (
    <div className="scores_container">
      <h2 className="current_score score_view">
        Current Score : {currentScore}
      </h2>
      <h2 className="highest_score score_view">
        Highest Score : {highestScore}
      </h2>
    </div>
  );
}
