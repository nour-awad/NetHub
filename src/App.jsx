import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import About from "./Pages/About";
import Trivia from "./Pages/TriviaQuestions";
import Navbar from './Pages/Navbar.jsx';
import Home from "./Pages/Home";
import AnswerFeedback from "./Pages/Answer.jsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AnswerFeedback isCorrect={true} answer={"aksdjn"}></AnswerFeedback>
        <Routes>
          <Route path="/asd" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
