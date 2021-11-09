import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { 
  BrowserRouter as Router
 } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />

      <Footer />

    </Router>
  )
}

export default App
