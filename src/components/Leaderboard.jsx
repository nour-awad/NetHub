import React, { useState, useEffect } from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const fetchScores = async () => {
      setIsLoading(true);
      try {
        
        const mockScores = [
          { name: "Taha", score: 100 },
          { name: "Faris", score: 20 },
          { name: "Laila", score: 20 },
          { name: "Nour", score: 5 },
          
        ];
        
        
        setScores(mockScores.sort((a, b) => b.score - a.score)); // Sort by score descending
      } catch (error) {
        console.error("Failed to fetch leaderboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScores();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      {isLoading ? (
        <p>Loading leaderboard...</p>
      ) : scores.length > 0 ? (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No scores available yet.</p>
      )}
    </div>
  );
};

export default Leaderboard;
