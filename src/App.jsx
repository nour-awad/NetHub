import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './compnents/About'

function App() {
  return(
  <Router>
  <Routes>
    <Route path="/" element={<About />} />
  </Routes>
</Router>
  )
}

export default App
