import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './Pages/About'
import Analytics from './Pages/Analytics';

function App() {
  return(
  <Router>
  <Routes>
    <Route path="/" element={<Analytics />} />
  </Routes>
</Router>
  )
}

export default App
