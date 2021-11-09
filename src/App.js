import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { 
  BrowserRouter as Router
 } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Routes from './routes'

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App
