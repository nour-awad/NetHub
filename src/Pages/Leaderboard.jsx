import React from "react";
import Leaderboard from "../components/Leaderboard";
import "../App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Trivia Game</h1>
      <Leaderboard />
    </div>
  );
};

export default App;
