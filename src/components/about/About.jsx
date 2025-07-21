import React from 'react'
import myImage from '../../assets/mathesh_nagendran.png'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import { Grid } from '@mui/material'
import './About.css'

const About = () => {
    return (
        <div className='about-layout'>
            <Grid container spacing={15} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}>
                <Grid size="16" sx={{
                    width: '50%'
                }}>
                    <Card variant="plain" sx={{
                        textAlign: 'left',
                        backgroundColor: 'transparent',
                        color: 'var(--home-screen-text-color)',
                        fontFamily: 'Belanosima, sans-serif',
                        'textShadow': '2px 2px 10px #393E46',
                        'margin': '0 0.5rem 3.5rem 1rem'
                    }}>
                        <h1 style={{ fontSize: '4rem', margin: '0' }}>
                            Mathesh Nagendran
                        </h1>
                        <p style={{ fontSize: '1.3rem', lineHeight: '1.5', letterSpacing: '1px', textAlign: 'justify', 'marginBottom': '-1.5%' }}>
                            I’m a backend-focused Developer with expertise in Java and the Spring ecosystem, building scalable, high-performance systems. </p>
                        <p style={{ fontSize: '1.3rem', lineHeight: '1.5', letterSpacing: '1px', textAlign: 'justify', 'marginBottom': '-1.5%' }}>
                            Currently, I work at an IoT-based product company, where I develop real-time data processing applications for the Electricity Board of TamilNadu. My core skill set includes Spring Boot, Spring WebFlux, MongoDB, SQL, Redis, Docker, and Kafka — focused on building reliable backend systems that process high-throughput data streams. </p>
                        <p style={{ fontSize: '1.3rem', lineHeight: '1.5', letterSpacing: '1px', textAlign: 'justify', 'marginBottom': '-1.5%' }}>
                            I’m also learning frontend development with ReactJS, JavaScript, HTML, and CSS, to expand my understanding of full-stack development. Additionally, I’ve explored big data technologies like Hadoop and Spark through proof-of-concept projects. </p>
                        <p style={{ fontSize: '1.3rem', lineHeight: '1.5', letterSpacing: '1px', textAlign: 'justify', 'marginBottom': '-1.5%' }}>
                            I'm seeking opportunities as a Java Developer, Full Stack Developer, or Data Engineer, where I can contribute to building efficient, data-driven applications while continuing to grow my technical skill set.
                        </p>
                    </Card>
                </Grid>
                <Grid size="16">
                    <Card variant="plain" sx={{
                        height: '90vh',
                        width: '30vw',
                        backgroundColor: 'transparent'
                    }}>
                        <CardCover>
                            <img
                                src={myImage}
                                loading="lazy"
                                alt=""
                                style={{ filter: 'grayscale(50%)' }}
                            />
                        </CardCover>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default About