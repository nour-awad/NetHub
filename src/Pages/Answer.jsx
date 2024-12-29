import React, { useState, useEffect } from "react";
import "../Pages/css/Answer.css";

const AnswerFeedback = ({ isCorrect, question }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    // Reset feedback when the props change
    setShowFeedback(false);
    setFeedbackMessage("");
  }, [isCorrect, question]);

  const handleFeedback = () => {
    setFeedbackMessage(isCorrect ? "Correct!" : "Wrong!");
    setShowFeedback(true);
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
      <button onClick={handleFeedback}>{question}</button>
    </div>
  );
};

export default AnswerFeedback;
