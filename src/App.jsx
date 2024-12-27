import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";

function App() {
  return (
    <div>
      <h1>Triviaa</h1>
      <Router>
      <Routes>
        
        <Route path="/" element={<Analytics />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
