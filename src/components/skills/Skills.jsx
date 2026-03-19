import React from 'react'
import AppBar from '../app-bar/AppBar'
import './Skills.css'
import { Grid } from '@mui/joy'
import { Chip, Typography } from '@mui/material'
import htmlSvg from '../../assets/logos/html.svg'
import cssSvg from '../../assets/logos/css.svg'
import jsSvg from '../../assets/logos/javascript.svg'
import reactSvg from '../../assets/logos/react.svg'
import materialUiSvg from '../../assets/logos/material-ui.svg'
import javaSvg from '../../assets/logos/java.svg'
import springBootSvg from '../../assets/logos/spring-boot.svg'
import springWebfluxSvg from '../../assets/logos/spring.svg'
import MongoDbSvg from '../../assets/logos/mongodb.svg'
import sqlSvg from '../../assets/logos/postgresql.svg'
import kafkaSvg from '../../assets/logos/kafka.svg'
import redisSvg from '../../assets/logos/redis.svg'
import dockerSvg from '../../assets/logos/docker.svg'
import kubernetesSvg from '../../assets/logos/kubernetes.svg'
import linuxSvg from '../../assets/logos/linux.svg'
import apacheHadoopSvg from '../../assets/logos/hadoop.svg'
import apacheSparkSvg from '../../assets/logos/spark.svg'
import awsSvg from '../../assets/logos/aws.svg'

const Skills = () => {

    const frontEndSkills = [
        {id: 1, name: 'HTML', icon: htmlSvg, learning: true},
        {id: 2, name: 'CSS', icon: cssSvg, learning: true},
        {id: 3, name: 'JavaScript', icon: jsSvg, learning: true},
        {id: 4, name: 'React', icon: reactSvg, learning: true},
        {id: 5, name: 'Material UI', icon: materialUiSvg, learning: true},
    ]

    const backEndSkills = [
        {id: 6, name: 'Java', icon: javaSvg, learning: false},
        {id: 7, name: 'Spring Boot', icon: springBootSvg, learning: false},
        {id: 8, name: 'Spring Webflux', icon: springWebfluxSvg, learning: false},
        {id: 9, name: 'MongoDB', icon: MongoDbSvg, learning: false},
        {id: 10, name: 'PostgreSQL', icon: sqlSvg, learning: false},
        {id: 11, name: 'Kafka', icon: kafkaSvg, learning: false},
        {id: 12, name: 'Redis', icon: redisSvg, learning: false},
    ]

    const opsSkills = [
        {id: 13, name: 'Docker', icon: dockerSvg, learning: false},
        {id: 14, name: 'Kubernetes', icon: kubernetesSvg, learning: true},
        {id: 15, name: 'Linux', icon: linuxSvg, learning: false},
        {id: 16, name: 'Apache Hadoop', icon: apacheHadoopSvg, learning: true},
        {id: 17, name: 'Apache Spark', icon: apacheSparkSvg, learning: true},
        {id: 18, name: 'AWS', icon: awsSvg, learning: true}
    ]

    const leftGridStyling = {
        position: 'absolute',
        width: '25vw',
        top: '35vh',
        left: '10vw',
        // height: '40vh',
        textAlign: 'center'
    }

    const middleGridStyling = {
        position: 'absolute',
        width: '25vw',
        bottom: '10vh',
        textAlign: 'center'
    }

    const rightGridStyling = {
        position: 'absolute',
        width: '25vw',
        top: '35vh',
        right: '10vw',
        textAlign: 'center'
    }

    return (
        <div className='skills-layout'>
            <AppBar />
            <div className='legend'>
                <h1>Categories</h1>
                <Chip label='Have Experience' color='primary' component={'div'} />
                <Chip label='Learning in progress' component={'div'} sx={{
                    backgroundColor: 'green'
                }} />
            </div>
            <div className='skills-container'>
                <div className='skills-header'>
                    <h1>
                        My Skills
                    </h1>
                </div>
                <div className='skills-grid'>
                    <Grid container spacing={4} rowSpacing={3} sx={leftGridStyling}>
                        <Typography sx={{
                            position: 'absolute',
                            top: '-7vh',
                            left: '10vw',
                            fontSize: '2.5rem',
                            fontFamily: 'var(--para-font-family)',
                            color: 'var(--home-screen-text-color)',
                            fontWeight: '700'
                        }}> Front End </Typography>
                        {
                            frontEndSkills.map(skill => (
                                <Grid item xs={4} md={4} lg={4}>
                                    <div className='skill-box' style={{
                                        boxShadow: `0.2vw 0.2vh 2vh ${skill.learning ? 'green' : 'blue'}`
                                    }}>
                                        <img src={skill.icon} alt={skill.name} style={{
                                            height: '5vh',
                                            marginBottom: '0.5vh',
                                        }}/>
                                        <h1>{skill.name}</h1>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
                <div className='skills-grid'>
                    <Grid container spacing={4} rowSpacing={3} sx={middleGridStyling}>
                        <Typography sx={{
                            position: 'absolute',
                            top: '-7vh',
                            left: '7vw',
                            fontSize: '2.5rem',
                            fontFamily: 'var(--para-font-family)',
                            color: 'var(--home-screen-text-color)',
                            fontWeight: '700'
                        }}> Operational </Typography>
                        {
                            opsSkills.map(skill => (
                                <Grid item sx={4} md={4} lg={4}>
                                    <div className='skill-box' style={{
                                        boxShadow: `0.2vw 0.2vh 2vh ${skill.learning ? 'green' : 'blue'}`
                                    }}>
                                        <img src={skill.icon} alt={skill.name} style={{
                                            height: '5vh',
                                            marginBottom: '0.5vh',
                                        }}/>
                                        <h1>{skill.name}</h1>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
                <div className='skills-grid'>
                    <Grid container spacing={4} rowSpacing={3} sx={rightGridStyling} justifyContent='flex-end'>
                        <Typography sx={{
                            position: 'absolute',
                            top: '-7vh',
                            left: '8vw',
                            fontSize: '2.5rem',
                            fontFamily: 'var(--para-font-family)',
                            color: 'var(--home-screen-text-color)',
                            fontWeight: '700'
                        }}> Back End </Typography>
                        {
                            backEndSkills.map(skill => (
                                <Grid item xs={4} md={4} lg={4}>
                                    <div className='skill-box' style={{
                                        boxShadow: `0.2vw 0.2vh 2vh ${skill.learning ? 'green' : 'blue'}`
                                    }}>
                                        <img src={skill.icon} alt={skill.name} style={{
                                            height: '5vh',
                                            marginBottom: '0.5vh',
                                        }}/>
                                        <h1>{skill.name}</h1>
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

export default Skills