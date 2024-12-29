import React, { useState }  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import About from "./Pages/About";
import Trivia from "./Pages/TriviaQuestions";
import Navbar from './Pages/Navbar.jsx';
import Home from "./Pages/Home";

function App() {
  const [analytics, setAnalytics] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem('triviaAnalytics'));
    return storedData || { correct: 0, wrong: 0 };
  });

  const handleUpdateAnalytics = (updatedAnalytics) => {
    setAnalytics(updatedAnalytics);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics correct={analytics.correct} wrong={analytics.wrong} />} />
          <Route path="/trivia" element={<Trivia onUpdateAnalytics={handleUpdateAnalytics}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
