import './App.css'
import Layout from './Layout/Layout'
import SplashScreen from './Components/splash screen/SplashScreen'
import Signup from './Components/create/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthScreen from './Components/auth/AuthScreen'

function App() {
  



  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="auth" element={<AuthScreen />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
