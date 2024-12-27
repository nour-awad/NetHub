import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import About from "./Pages/About";

function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/about" element={< About/>} />
        </Routes>
      </Router>
    
    
  );

  <div>
  <TrivolioFooter/>
</div>
}

export default App;
