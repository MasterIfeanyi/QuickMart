import './App.css'
import Layout from './Layout/Layout'
import SplashScreen from './Components/splash screen/SplashScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  



  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
