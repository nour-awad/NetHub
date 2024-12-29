import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
<<<<<<< HEAD
import About from "./Pages/About";
import Trivia from "./Pages/TriviaQuestions";
=======
import AnswerFeedback from "./Pages/Answer";
import About from "./Pages/About";
>>>>>>> refs/remotes/origin/main

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<Trivia />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
=======
      <h1>Navbar Simulation</h1>
      <Router>
        <Routes>
        <Route path="/about" element={<About />} />
          <Route path="/anlytics" element={<Analytics />} />
        </Routes>
      </Router>
      <h1>Footer Simulation</h1>
    
>>>>>>> refs/remotes/origin/main
    </div>
  );
}

export default App;
