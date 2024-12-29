import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); 

  const handleAnswer = (answer) => {
    setSelectedOption(answer);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">TRIVOLIO</h1>
        <div className="decorative-star"></div>
        <div id="sparkles-container"></div>
        <div className="decorative-circle"></div>
        <div className="decorative-line"></div>
      </section>

      {/* Categories Section */}
      <div className="categories">
        <div className="category-card">
          <p className="question">What is the capital of France?</p>
          <ul className="options">
            <li
              className={`option ${selectedOption === "Paris" ? "correct" : ""}`}
              onClick={() => handleAnswer("Paris")}
            >
              Paris
            </li>
            <li
              className={`option ${selectedOption === "London" ? "wrong" : ""}`}
              onClick={() => handleAnswer("London")}
            >
              London
            </li>
            <li
              className={`option ${selectedOption === "Berlin" ? "wrong" : ""}`}
              onClick={() => handleAnswer("Berlin")}
            >
              Berlin
            </li>
            <li
              className={`option ${selectedOption === "Madrid" ? "wrong" : ""}`}
              onClick={() => handleAnswer("Madrid")}
            >
              Madrid
            </li>
          </ul>
        </div>
      </div>

      {/* View More Button */}
      <div className="view-more-container">
        <button className="view-more-button" onClick={() => navigate("/trivia")}>
          View More
        </button>
      </div>
    </div>
  );
}

export default Home;
