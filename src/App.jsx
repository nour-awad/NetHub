import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import About from "./Pages/About";
import Trivia from "./Pages/TriviaQuestions";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Trivia />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );

    <div>
      <TrivolioFooter/>
    </div>
}

export default App;
