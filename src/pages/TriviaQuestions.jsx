import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import AnswerFeedback from '../Pages/Answer.jsx';
import '../Pages/css/Trivia.css';

function Trivia({ onUpdateAnalytics }) {
  const { data, loading, error } = useFetch('https://opentdb.com/api.php?amount=50&type=multiple');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [analytics, setAnalytics] = useState({ correct: 0, wrong: 0 });

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="alert alert-danger">Error: {error}</p>;

  if (!data || data.response_code !== 0) {
    return <p>No trivia questions available.</p>;
  }

  const processedQuestions = data.results.map((question, index) => ({
    ...question,
    id: index,
    answers: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
  }));

  const handleAnswer = (questionId, isCorrect) => {
    if (selectedAnswers[questionId] !== undefined) return;

    setSelectedAnswers((prev) => ({ ...prev, [questionId]: isCorrect }));

    setAnalytics((prev) => {
      const updatedAnalytics = {
        correct: prev.correct + (isCorrect ? 1 : 0),
        wrong: prev.wrong + (!isCorrect ? 1 : 0),
      };

      // Notify parent component for analytics update
      if (onUpdateAnalytics) {
        onUpdateAnalytics(updatedAnalytics);
      }

      return updatedAnalytics;
    });
  };

  const filteredQuestions = processedQuestions.filter((question) =>
    question.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filteredQuestions.map((question) => (
          <li key={question.id} className="list-group-item">
            <h5 dangerouslySetInnerHTML={{ __html: question.question }} />
            <ul>
              {question.answers.map((answer, i) => (
                <li key={i}>
                  <AnswerFeedback
                    answer={answer}
                    isCorrect={answer === question.correct_answer}
                    onAnswer={(isCorrect) => handleAnswer(question.id, isCorrect)}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trivia;