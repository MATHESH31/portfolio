import './About.css';
import Button from '@mui/joy/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import myImage from '../../assets/mathesh_nagendran.svg';
import AppBar from '../app-bar/AppBar';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div className='about-layout'>
            <AppBar />
            <div className='about-contents'>
                <h1 className='name'>Mathesh Nagendran</h1>
                <h1 className='role'>Systems Analyst</h1>
                <div className='left-content-box'>
                    <h1 className='greetings'>Hey there!</h1>
                    <p className='my-self'>
                        I’m a backend-focused Developer, currently extending my skills by exploring ReactJS.
                    </p>
                    <p className='my-self'>
                        I also explored a bit of devops and big data.
                    </p>
                    <p className='my-self'>
                        Currently, I work at Bluenett (formerly Lantrasoft) an IoT-based product company.
                    </p>
                    <Button className="left-button" variant='plain' style={{
                        color: 'var(--home-screen-text-color)',
                        marginLeft: '0.5rem',
                        fontSize: '1.2rem',
                        background: 'none',
                        borderRadius: '50vw',
                        border: '0.1rem solid var(--home-screen-text-color)',
                        
                    }} onClick={() => {navigate('/contact')}}>
                        Get in touch <ArrowForwardIcon />
                    </Button>
                </div>
                <div className="oli-vattam"></div>
                <div className='portrait'>
                    <img src={myImage} />
                </div>
                <div className='right-content-box'>
                    <div className='experience'>
                        <h1>Experience</h1>
                        <h3>3 YEARS</h3>
                    </div>
                    <div className='projects-worked' onClick={() => {navigate('/projects')}}>
                        <h1>Projects Worked</h1>
                        <h3>4 - PROFESSIONAL</h3>
                        <h3>5 - PERSONAL</h3>
                        <h3>3 - POC</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About