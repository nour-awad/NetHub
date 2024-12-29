import React, { useState } from "react";
import "./css/Home.css";

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedOption(answer);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">TRIVOLIO</h1>
        <div class="decorative-star"></div>
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

        
        <div className="category-card">
          <p className="question">What is 78 + 66 ?</p>
          <ul className="options">
            <li
              className={`option ${selectedOption === "136" ? "wrong" : ""}`}
              onClick={() => handleAnswer("136")}
            >
              136
            </li>
            <li
              className={`option ${selectedOption === "144" ? "correct" : ""}`}
              onClick={() => handleAnswer("144")}
            >
              144
            </li>
            <li
              className={`option ${selectedOption === "195" ? "wrong" : ""}`}
              onClick={() => handleAnswer("195")}
            >
              195
            </li>
            <li
              className={`option ${selectedOption === "126" ? "wrong" : ""}`}
              onClick={() => handleAnswer("126")}
            >
              126
            </li>
          </ul>
        </div>

        
        <div className="category-card">
          <p className="question">Who wrote "Romeo and Juliet"?</p>
          <ul className="options">
            <li
              className={`option ${
                selectedOption === "Charles Dickens" ? "wrong" : ""
              }`}
              onClick={() => handleAnswer("Charles Dickens")}
            >
              Charles Dickens
            </li>
            <li
              className={`option ${
                selectedOption === "William Shakespeare" ? "correct" : ""
              }`}
              onClick={() => handleAnswer("William Shakespeare")}
            >
              William Shakespeare
            </li>
            <li
              className={`option ${selectedOption === "J.K. Rowling" ? "wrong" : ""}`}
              onClick={() => handleAnswer("J.K. Rowling")}
            >
              J.K. Rowling
            </li>
            <li
              className={`option ${selectedOption === "Leo Tolstoy" ? "wrong" : ""}`}
              onClick={() => handleAnswer("Leo Tolstoy")}
            >
              Leo Tolstoy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
