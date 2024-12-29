import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ScoreTracker.css"; 

const ScoreTracker = ({ initialScore = 0, onScoreChange }) => {
  const [score, setScore] = useState(initialScore);


  const updateScore = (amount) => {
    const newScore = score + amount;
    setScore(newScore);
    if (onScoreChange) onScoreChange(newScore);
  };

  return (
    <div className="score-tracker">
      <h2>Your Score: {score}</h2>
      <button onClick={() => updateScore(1)}>Increase</button>
      <button onClick={() => updateScore(-1)}>Decrease</button>
      <button onClick={() => setScore(initialScore)}>Reset</button>
    </div>
  );
};

ScoreTracker.propTypes = {
  initialScore: PropTypes.number,
  onScoreChange: PropTypes.func,
};

export default ScoreTracker;
