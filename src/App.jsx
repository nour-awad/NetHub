import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import About from "./Pages/About";
import Trivia from "./Pages/TriviaQuestions";
import Footer from './Pages/Footer.jsx';
import AnswerFeedback from "./Pages/Answer";

function App() {
  return (
    <div>
      <h1>Triviaa</h1>
      <Router>
        <Routes>
          <Route path="/anlytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer/>
    
    </div>
  );
}

export default App;
