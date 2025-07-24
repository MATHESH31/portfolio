import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App
