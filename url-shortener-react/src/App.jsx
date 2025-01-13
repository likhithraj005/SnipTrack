import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
// import AboutPage from './components/AboutPage'
// import LandingPage from './components/LandingPage'
// import NavBar from './components/NavBar'
// import Footer from './components/Footer'
// import RegisterPage from './components/RegisterPage'
// import { Toaster } from 'react-hot-toast'
// import LoginPage from './components/LoginPage'
// import DashboardLayout from './components/Dashboard/DashboardLayout'
import { getApps } from './utils/helper'



function App() {

  const CurrentApp = getApps();

  return (
    <>
      <Router>
      {/* <NavBar/>
      <Toaster position='bottom-center'/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/dashboard" element={<DashboardLayout/>} />
        </Routes>
      <Footer/> */}

        <CurrentApp />
      </Router>
    </>
  )
}

export default App
