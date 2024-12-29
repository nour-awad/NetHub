import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import AnswerFeedback from "../Pages/Answer.jsx";
import Analytics from "../Pages/Analytics.jsx";

function Trivia() {
  const { data, loading, error } = useFetch(
    "https://opentdb.com/api.php?amount=50&type=multiple"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="alert alert-danger">Error: {error}</p>;

  if (!data || data.response_code !== 0) {
    return <p>No trivia questions available.</p>;
  }

  const filteredQuestions = data.results.filter((question) =>
    question.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Trivia Questions</h1>
      <input
        type="text"
        placeholder="Search questions..."
        className="form-control mb-3"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-group">
        {filteredQuestions.map((question, index) => (
          <li key={index} className="list-group-item">
            <h5 dangerouslySetInnerHTML={{ __html: question.question }} />
            <ul>
              {[...question.incorrect_answers, question.correct_answer]
                .sort(() => Math.random() - 0.5) // Shuffle answers
                .map((answer, i) => (
                  <li key={i}>
                    <AnswerFeedback
                      isCorrect={answer === question.correct_answer}
                      answer={answer}
                      onAnswer={handleAnswer}
                    />
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
      {correctCount + wrongCount > 0 && (
        <Analytics correct={correctCount} wrong={wrongCount} />
      )}
    </div>
  );
}

export default Trivia;

