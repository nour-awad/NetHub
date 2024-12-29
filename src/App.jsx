<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import AnswerFeedback from "./Pages/Answer";

function App() {
  return (
    <div>
      <h1>Navbar Simulation</h1>
      <AnswerFeedback isCorrect={true} answer={"the true one"} ></AnswerFeedback>
      <AnswerFeedback isCorrect={false} answer={"The false one"} ></AnswerFeedback>
      <Router>
        <Routes>
          <Route path="/anlytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    
    </div>
  );

    <div>
      <TrivolioFooter/>
    </div>
>>>>>>> 008426e63637193844aff75c0db3981371d8d61d
}

export default App;
