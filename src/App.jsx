import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import AnswerFeedback from "./Pages/Answer";

function App() {
  return (

      <Router>
        <Routes>
          <Route path="/anlytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
