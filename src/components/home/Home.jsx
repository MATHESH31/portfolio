import React from 'react'
import './Home.css'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'
import { Grid, Typography } from '@mui/material'
import { filter } from 'framer-motion/client'

const Home = () => {
    return (
        <div className='home-layout'>
            <Grid container spacing={15} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                <Grid size="16" sx={{
                    width: '50%'
                }}>
                    <Card variant="plain" sx={{
                        padding: 2,
                        textAlign: 'left',
                        backgroundColor: '#069A8E',
                        color: '#A1E3D8',
                        fontFamily: 'ST Remona Neue, sans-serif',
                    }}>
                        <h1 style={{ fontSize: '4rem', margin: '0' }}>
                            Hello There!
                        </h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.5', letterSpacing: '1px', textAlign: 'justify' }}>
                            I’m a backend-focused Developer with expertise in Java and the Spring ecosystem, building scalable, high-performance systems. <br /> <br />
                            Currently, I work at an IoT-based product company, where I develop real-time data processing applications for the Electricity Board of TamilNadu. My core skill set includes Spring Boot, Spring WebFlux, MongoDB, SQL, Redis, Docker, and Kafka — focused on building reliable backend systems that process high-throughput data streams. <br /> <br />
                            I’m also learning frontend development with ReactJS, JavaScript, HTML, and CSS, to expand my understanding of full-stack development. Additionally, I’ve explored big data technologies like Hadoop and Spark through proof-of-concept projects. <br /> <br />
                            I'm seeking opportunities as a Java Developer, Full Stack Developer, or Data Engineer, where I can contribute to building efficient, data-driven applications while continuing to grow my technical skill set.
                        </p>
                    </Card>
                </Grid>
                <Grid size="16">
                    <Card variant="plain" sx={{
                        height: '60vh',
                        width: '50vh',
                    }}>
                        <CardCover>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8IhFggd-6J4NSwpyovms-K6PM91PRCBJUg&s"
                                loading="lazy"
                                alt=""
                                style={{ filter: 'grayscale(100%)' } }
                            />
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="title-lg" sx={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: '#FFF',

                            }}>
                                Mathesh Nagendran
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home