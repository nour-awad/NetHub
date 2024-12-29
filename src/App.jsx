import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import AnswerFeedback from "./Pages/Answer";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <h1>Navbar Simulation</h1>
      <Router>
        <Routes>
        <Route path="/about" element={<About />} />
          <Route path="/anlytics" element={<Analytics />} />
        </Routes>
      </Router>
      <h1>Footer Simulation</h1>
    
    </div>
  );
}

export default App;
