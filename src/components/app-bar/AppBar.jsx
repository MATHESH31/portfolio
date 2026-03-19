import React from 'react'
import './AppBar.css'
import { useLocation, useNavigate } from 'react-router-dom'

const tabMap = [
    { id: 'about', name: 'About', path: '/about' },
    { id: 'skills', name: 'Skills', path: '/skills' },
    { id: 'projects', name: 'Projects', path: '/projects' },
    { id: 'contact', name: 'Contact', path: '/contact' },
]

const AppBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    React.useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

    return (
        <header className="app-bar">
            <div className="app-bar__inner section-panel">
                <button
                    type="button"
                    className="app-bar__brand"
                    onClick={() => navigate('/about')}
                    aria-label="Go to about page"
                >
                    <span className="app-bar__brand-mark">MN</span>
                    <span className="app-bar__brand-text">Mathesh Nagendran</span>
                </button>
                <button
                    type="button"
                    className={`app-bar__menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
                    onClick={() => setIsMenuOpen((current) => !current)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
                <nav className={`app-bar__nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Primary">
                    <ul className="app-bar__list">
                        {tabMap.map((tab) => {
                            const isActive = location.pathname === tab.path

                            return (
                                <li key={tab.id}>
                                    <button
                                        type="button"
                                        className={`app-bar__tab ${isActive ? 'is-active' : ''}`}
                                        onClick={() => navigate(tab.path)}
                                    >
                                        {tab.name}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default AppBar
