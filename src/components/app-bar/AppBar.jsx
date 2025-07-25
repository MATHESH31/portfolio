import React from 'react'
import './AppBar.css'
import { NavLink } from 'react-router-dom'

const AppBar = () => {

    return (
        <nav className='app-bar'>
            <ul className='app-bar-list'>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink></li>
                <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default AppBar