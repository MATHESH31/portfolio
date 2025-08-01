import React from 'react'
import AppBar from '../app-bar/AppBar'
import './Skills.css'
import { Grid } from '@mui/joy'
import { Chip } from '@mui/material'

const Skills = () => {
    const leftGridStyling = {
        position: 'absolute',
        width: '30vw',
        top: '40vh',
        left: '10vw',
        alignItems: 'center',
    }

    const middleGridStyling = {
        position: 'absolute',
        width: '30vw',
        bottom: '10vh',
        transform: 'translateX(-50%)',
    }

    const rightGridStyling = {
        position: 'absolute',
        width: '30vw',
        top: '40vh',
        right : '10vw',
    }

    return (
        <div className='skills-layout'>
            <AppBar />
            <div className='legend'>
                <h1>Categories</h1>
                <Chip label='Have Experience' color='primary' component={'div'}/>
                <Chip label='Learning in progress' color='error' component={'div'}/>
            </div>
            <div className='skills-container'>
                <div className='skills-header'>
                    <h1>
                        My Skills
                    </h1>
                </div>
                <div className='arrows-container'>
                    <div className='left-arrow-container'>
                        <div className='left-up-line'></div>
                        <div className='left-line'></div>
                        <div className='left-down-line'></div>
                    </div>
                    <div className='middle-line'></div>
                    <div className='left-arrow-container invert'>
                        <div className='left-up-line'></div>
                        <div className='left-line'></div>
                        <div className='left-down-line'></div>
                    </div>
                </div>
                <div className='skills-grid'>
                    <Grid container spacing={1} rowSpacing={3} sx={leftGridStyling}>
                        <Grid item xs={4}>
                            <h1 className='learning'>
                                HTML
                            </h1>
                        </Grid>
                        <Grid item xs={4}>
                            <h1 className='learning'>
                                CSS
                            </h1>
                        </Grid>
                        <Grid item xs={4}>
                            <h1 className='learning'>
                                JavaScript
                            </h1>
                        </Grid>
                        <Grid item xs={6}>
                            <h1 className='learning'>
                                Reactjs
                            </h1>
                        </Grid>
                        <Grid item xs={6}>
                            <h1 className='learning'>
                                Material UI
                            </h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} rowSpacing={3} sx={middleGridStyling}>
                        <Grid item xs={4}>
                            <h1 className='experienced'>
                                Docker
                            </h1>
                        </Grid>
                        <Grid item xs={4}>
                            <h1 className='learning'>
                                Kubernetes
                            </h1>
                        </Grid>
                        <Grid item xs={4}>
                            <h1 className='experienced'>
                                Linux
                            </h1>
                        </Grid>
                        <Grid item xs={6}>
                            <h1 className='learning'>
                                Apache Hadoop
                            </h1>
                        </Grid>
                        <Grid item xs={6}>
                            <h1 className='learning'>
                                Apache Spark
                            </h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} rowSpacing={3} sx={rightGridStyling}>
                            <Grid item xs={4}>
                                <h1 className='experienced'>
                                    Core Java
                                </h1>
                            </Grid>
                            <Grid item xs={4}>
                                <h1 className='experienced'>
                                    Spring Boot
                                </h1>
                            </Grid>
                            <Grid item xs={4}>
                                <h1 className='experienced'>
                                    MongoDB
                                </h1>
                            </Grid>
                            <Grid item xs={6}>
                                <h1 className='experienced'>
                                    Spring Webflux
                                </h1>
                            </Grid>
                            <Grid item xs={6}>
                                <h1 className='experienced'>
                                    SQL
                                </h1>
                            </Grid>
                            <Grid item xs={6}>
                                <h1 className='experienced'>
                                    Kafka
                                </h1>
                            </Grid>
                            <Grid item xs={6}>
                                <h1 className='experienced'>
                                    Redis
                                </h1>
                            </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Skills