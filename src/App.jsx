import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './components/intro/Intro.jsx'
import Home from './components/home/Home.jsx'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App
