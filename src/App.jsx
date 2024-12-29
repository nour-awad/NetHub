import React, { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import Leaderboard from "./components/Leaderboard";
import ScoreTracker from "./components/ScoreTracker";
import "./App.css";

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchScores = () => {
      const savedScores = localStorage.getItem("leaderboardScores");
      const parsedScores = savedScores ? JSON.parse(savedScores) : [];
      setLeaderboardData(parsedScores.sort((a, b) => b.score - a.score));
    };

    // Fetch leaderboard data immediately
    fetchScores();

    // Simulate app loading
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <h1>Welcome to the Trivia App</h1>
      <LoadingSpinner isLoading={isAppLoading} size="60px" color="#3498db" />
      {!isAppLoading && (
        <>
          <ScoreTracker score={score} setScore={setScore} />
          <Leaderboard scores={leaderboardData} />
        </>
      )}
    </div>
  );
};

export default App;
