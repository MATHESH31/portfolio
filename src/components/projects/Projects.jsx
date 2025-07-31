import React from 'react'
import AppBar from '../app-bar/AppBar'
import './Projects.css';
import { Grid } from '@mui/joy';
import { Chip } from '@mui/material';
import projectJson from '../../staticData/projects.json'

const Projects = () => {
    const [section, setSection] = React.useState('Professional');

    const handleTabChange = (tab) => {
        setSection(tab)
    } 

    return (
        <div>
            <AppBar />
            <div className='projects-layout'>
                <div className='projects-tabs'>
                    <ul>
                        <li onClick={e => {handleTabChange('Professional')}}>Professional</li>
                        <li onClick={e => {handleTabChange('Personal')}}>Personal</li>
                        <li onClick={e => {handleTabChange('POC')}}>POC</li>
                    </ul>
                </div>
                <div className='projects-container'>
                    <Grid container spacing={4}>
                    {
                            projectJson.filter(project => project.type === section).map(project => (
                                <Grid item xs={12} sm={6} md={4} key={project.title}>
                                    <div className='card-container'>
                                        <div className='card'>
                                            <h1>{project.title}</h1>
                                            <p>{project.description}</p>
                                            <div className='tech-stack'>
                                                {
                                                    project.techStack.map((tech, index) => (
                                                        <Chip label={tech} key={index} component={'span'} /> 
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='card-overlay'>
                                            
                                        </div>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Projects