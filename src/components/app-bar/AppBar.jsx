import React from 'react'
import './AppBar.css'
import { useLocation, useNavigate } from 'react-router-dom'

const AppBar = () => {
    const tabMap = [
        {id: 'about', name: 'About Me', path:'/about'},
        {id: 'skills', name: 'Skills', path:'/skills'},
        {id: 'projects', name: 'Projects', path:'/projects'},
        {id: 'contact', name: 'Contact', path:'/contact'}
    ]

    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = React.useState(() => {
 return tabMap.find(tab => tab.path === location.pathname)?.id || 'about';
    });
    

    return (
        <nav className='app-bar'>
            <ul className='app-bar-list'>
                {
                    tabMap.map(tab => (
                        <li id={tab.id}
                        className={`tab ${activeTab === tab.id ? 'active' : ''}`} 
                        onClick={() => { 
                            setActiveTab(tab.id)
                            navigate(tab.path);
                        }}
                        > {tab.name} </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default AppBar