import React from 'react'
import './AppBar.css'

const AppBar = () => {
    return (
        <nav className='app-bar'>
            <ul className='app-bar-list'>
                <li><a href='#about'>About Me</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default AppBar