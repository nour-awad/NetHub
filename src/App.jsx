import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
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
    
    </div>
  );

    <div>
      <TrivolioFooter/>
    </div>
}

export default App;
