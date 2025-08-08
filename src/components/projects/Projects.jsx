import React from 'react'
import AppBar from '../app-bar/AppBar'
import './Projects.css';
import { Grid } from '@mui/joy';
import { Chip } from '@mui/material';
import projectJson from '../../staticData/projects.json'
import { GitHub, Link, LinkedIn } from '@mui/icons-material';

const Projects = () => {
    const [section, setSection] = React.useState('Professional');

    function removeActiveClass(){
        const list = document.querySelectorAll('.list')
        list.forEach(element => {
            element.classList.remove('active-list')
        });
    }
    const handleTabChange = (tab, e) => {
        removeActiveClass();
        e.target.classList.add('active-list')
        setSection(tab)
    }

    return (
        <div>
            <AppBar />
            <div className='projects-layout'>
                <div className='projects-tabs'>
                    <ul>
                        <li onClick={e => {handleTabChange('Professional', e)}} className='list active-list'>Professional</li>
                        <li onClick={e => {handleTabChange('Personal', e)}} className='list'>Personal</li>
                        <li onClick={e => {handleTabChange('POC', e)}} className='list'>POC</li>
                    </ul>
                </div>
                <div className='projects-container'>
                    <Grid container spacing={4}>
                    {
                            projectJson.filter(project => project.type === section).map(project => (
                                <Grid item xs={12} sm={6} md={4} key={project.title}>
                                    <div className='card-container'>
                                        <div className='card' >
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
                                            <div className='overlay-content'>
                                                {
                                                    project.linkedInLink !== '' ? (
                                                        <a href={project.linkedInLink} target='_blank'>
                                                            <LinkedIn sx={{
                                                                fontSize: '6rem',
                                                                color: 'var(--intro-text-color)'
                                                            }}/>
                                                        </a>
                                                     ) : project.githubLink.length == 0 && project.url === ''
                                                     ? <p className='unavailable-link'>No links available</p>
                                                     : null
                                                }
                                                {
                                                    project.url !== '' ? (
                                                        <a href={project.url} target='_blank'>
                                                            <Link sx={{
                                                                fontSize: '6rem',
                                                                color: 'var(--intro-text-color)'
                                                            }}/>
                                                        </a>
                                                    ) : null
                                                }
                                                {
                                                    project.githubLink.map(link => (
                                                        <a href={link} target='_blank'>
                                                            <GitHub sx={{
                                                                fontSize: '6rem',
                                                                color: 'var(--intro-text-color)'
                                                            }}/>
                                                        </a>
                                                    )) 
                                                }
                                            </div>
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