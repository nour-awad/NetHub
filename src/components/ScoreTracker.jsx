import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ScoreTracker.css";

const ScoreTracker = ({ initialScore = 0, onScoreChange }) => {
  const [score, setScore] = useState(initialScore);

  const resetScore = () => {
    setScore(0);
    if (onScoreChange) onScoreChange(initialScore);
  };

  return (
    <div className="score-tracker">
      <h1>Score: {score}</h1>
      <button className="score-tracker-button" onClick={resetScore}>
        Reset
      </button>
    </div>
  );
};

ScoreTracker.propTypes = {
  initialScore: PropTypes.number,
  onScoreChange: PropTypes.func,
};

export default ScoreTracker;
