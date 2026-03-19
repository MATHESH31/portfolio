import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import AppBar from './components/app-bar/AppBar.jsx'
import './App.css'

const AppShell = () => {
    return (
        <div className="app-shell">
            <div className="app-shell__backdrop app-shell__backdrop--one" />
            <div className="app-shell__backdrop app-shell__backdrop--two" />
            <AppBar />
            <main className="app-shell__content">
                <Outlet />
            </main>
        </div>
    )
}

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<AppShell />}>
                    <Route path="*" element={<Navigate to="/about" replace />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
