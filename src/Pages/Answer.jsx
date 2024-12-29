import React, { useState, useEffect } from "react";

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
    <div>
      <button onClick={handleFeedback} className="btn btn-primary">
        {answer}
      </button>
      {showFeedback && (
        <p className={isCorrect ? "feedback-correct" : "feedback-wrong"}>
          {feedbackMessage}
        </p>
      )}
    </div>
  );
};

export default AnswerFeedback;