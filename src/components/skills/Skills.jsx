import React from 'react'
import AppBar from '../app-bar/AppBar'
import './Skills.css'
import { Grid } from '@mui/joy'

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
                            <h1>
                                HTML
                            </h1>
                        </Grid>
                        <Grid item xs={4}>
                            <h1>
                                CSS
                            </h1>
                        </Grid>
                        <Grid item xs={4}>
                            <h1>
                                JavaScript
                            </h1>
                        </Grid>
                        <Grid item xs={6}>
                            <h1>
                                Reactjs
                            </h1>
                        </Grid>
                        <Grid item xs={6}>
                            <h1>
                                Material UI
                            </h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} rowSpacing={3} sx={middleGridStyling}>
                        <Grid item xs={4}>
                            <h1>
                                Docker
                            </h1>
                        </Grid>
                        <Grid item xs={4}>
                            <h1>
                                Kubernetes
                            </h1>
                        </Grid>
                        <Grid item xs={4}>
                            <h1>
                                Linux
                            </h1>
                        </Grid>
                        <Grid item xs={6}>
                            <h1>
                                Apache Hadoop
                            </h1>
                        </Grid>
                        <Grid item xs={6}>
                            <h1>
                                Apache Spark
                            </h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} rowSpacing={3} sx={rightGridStyling}>
                            <Grid item xs={4}>
                                <h1>
                                    Core Java
                                </h1>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>
                                    Spring Boot
                                </h1>
                            </Grid>
                            <Grid item xs={4}>
                                <h1>
                                    MongoDB
                                </h1>
                            </Grid>
                            <Grid item xs={6}>
                                <h1>
                                    Spring Webflux
                                </h1>
                            </Grid>
                            <Grid item xs={6}>
                                <h1>
                                    SQL
                                </h1>
                            </Grid>
                            <Grid item xs={6}>
                                <h1>
                                    Kafka
                                </h1>
                            </Grid>
                            <Grid item xs={6}>
                                <h1>
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