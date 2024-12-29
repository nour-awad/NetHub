import React, { useState, useEffect } from 'react';
import AnswerFeedback from '../Pages/Answer.jsx';
import '../Pages/css/Trivia.css';

function Trivia({ onUpdateAnalytics }) {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [analytics, setAnalytics] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('triviaAnalytics'));
    return storedData || { correct: 0, wrong: 0 };
  });
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const fetchQuestion = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
      const data = await response.json();

      if (data.response_code === 0 && data.results.length > 0) {
        const question = data.results[0];
        setQuestionData({
          ...question,
          answers: [...question.incorrect_answers, question.correct_answer].sort(
            () => Math.random() - 0.5
          ),
        });
      } else {
        setError('No trivia questions available.');
      }
    } catch (err) {
      setError('Failed to fetch question.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(isCorrect);

    const updatedAnalytics = {
      correct: analytics.correct + (isCorrect ? 1 : 0),
      wrong: analytics.wrong + (!isCorrect ? 1 : 0),
    };

    setAnalytics(updatedAnalytics);

    // Save to local storage
    localStorage.setItem('triviaAnalytics', JSON.stringify(updatedAnalytics));

    // Notify parent component if needed
    if (onUpdateAnalytics) {
      onUpdateAnalytics(updatedAnalytics);
    }

    // Fetch the next question after a short delay
    setTimeout(() => {
      setSelectedAnswer(null);
      fetchQuestion();
    }, 1000);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="alert alert-danger">{error}</p>;

  return (
    <div className="container mt-5">
      <h1>Trivia Questions</h1>
      {questionData && (
        <div className="question-container">
          <h5 dangerouslySetInnerHTML={{ __html: questionData.question }} />
          <ul>
            {questionData.answers.map((answer, index) => (
              <li key={index}>
                <AnswerFeedback
                  answer={answer}
                  isCorrect={answer === questionData.correct_answer}
                  onAnswer={(isCorrect) => handleAnswer(isCorrect)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Trivia;