import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Navigate to="/about" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App
