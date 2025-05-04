import './App.css'
import Layout from './Layout/Layout'
import SplashScreen from './Components/splash screen/SplashScreen'
import Signup from './Components/create/Signup'
import Login from './Components/login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthScreen from './Components/auth/AuthScreen'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="auth" element={<AuthScreen />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path='home' element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
