import React, { useState, useEffect } from "react";
import "../Pages/css/Answer.css";

const AnswerFeedback = ({ isCorrect, answer, onAnswer }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    setShowFeedback(false); // Reset feedback whenever props change
    setFeedbackMessage("");
  }, [isCorrect, answer]);

  const handleFeedback = () => {
    setFeedbackMessage(isCorrect ? "Correct!" : "Wrong!");
    setShowFeedback(true);
    if (onAnswer) {
      onAnswer(isCorrect); // Notify the parent
    }
  };

  return (
    <div className="answer-feedback-container text-center">
      <button onClick={handleFeedback} className="mcq-option">
        {answer}
      </button>
      {showFeedback && (
        <p
          className={`feedback-message ${
            isCorrect ? "feedback-correct" : "feedback-wrong"
          }`}
        >
          {feedbackMessage}
        </p>
      )}
    </div>
  );
};

export default AnswerFeedback;
