import React from 'react'
import Tabs from '@mui/joy/Tabs'
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import './Home.css'
import About from '../about/About.jsx'

const Home = () => {

    // function handleTabChange() { 

    // }

    return (
        <div className='home-layout'>
            <Tabs aria-label="Basic tabs" defaultValue={0} variant='plain' sx={{
                backgroundColor: 'var(--home-screen-bg)',
            }}>  
                <TabList style={{
                    display: 'flex',
                    height: '5vh',
                    fontSize: '1.2rem',
                    fontFamily: 'Belanosima, sans-serif',
                }}>
                    <Tab sx={{
                        flex: 1,
                        
                    }}>Introduction</Tab>
                    <Tab sx={{
                        flex: 1,
                        // color: 'var(--home-screen-text-color)',
                    }}>Second tab</Tab>
                    <Tab sx={{
                        flex: 1,
                        // color: 'var(--home-screen-text-color)',
                    }}>Third tab</Tab>
                    <Tab sx={{
                        flex: 1,
                        // color: 'var(--home-screen-text-color)',
                    }}>Fourth tab</Tab>
                    <Tab sx={{
                        flex: 1,
                        // color: 'var(--home-screen-text-color)',
                    }}>Fifth tab</Tab>
                </TabList>
                <TabPanel value={0}>
                    <About />
                </TabPanel>
                <TabPanel value={1}>
                    <b>Second</b> tab panel
                </TabPanel>
                <TabPanel value={2}>
                    <b>Third</b> tab panel
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Home