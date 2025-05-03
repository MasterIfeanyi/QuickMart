import './App.css'
import SplashScreen from './splash screen/SplashScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  


  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
      </Routes>
    </Router>
  )
}

export default App
