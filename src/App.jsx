import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import About from "./Pages/About";
import Trivia from "./Pages/TriviaQuestions";
import Footer from './Pages/Footer.js';
import AnswerFeedback from "./Pages/Answer";
// import Footer from "./Pages/Footer";

function App() {
  return (
    <div>
      <h1>Navbar Simulation</h1>
      <AnswerFeedback isCorrect={true} answer={"the true one"} ></AnswerFeedback>
      <AnswerFeedback isCorrect={false} answer={"The false one"} ></AnswerFeedback>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer/>
    {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
