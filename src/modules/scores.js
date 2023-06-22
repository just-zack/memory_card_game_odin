import "./styles/scores.css";

export default function Scores({ scores }) {
  return (
    <div className="scores_container">
      <h2 className="current_score score_view">
        Current Score : {scores.currentScore}
      </h2>
      <h2 className="highest_score score_view">
        Highest Score : {scores.highestScore}
      </h2>
    </div>
  );
}
