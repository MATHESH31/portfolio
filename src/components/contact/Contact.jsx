import AppBar from '../app-bar/AppBar'
import './Contact.css';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import myAnimatedImage from '../../assets/mathesh_nagendran_animated.png'
import { vh } from 'framer-motion';

const Contact = () => {
    const gitStyle = {
        height: '8vh',
        width: '8vw',
        color: 'var(--home-screen-text-color)',
    }

    const linkedInStyle = {
        height: '8vh',
        width: '8vw',
        color: 'var(--home-screen-text-color)',
    }

    const instaStyle = {
        height: '8vh',
        width: '8vw',
        color: 'var(--home-screen-text-color)',
    }

    return (
        <div>
            <AppBar />
            <div className='contact-layout'>
                <img src={myAnimatedImage} className='animated-portrait' />
                <div className='contact-content-one'>
                    <h1 className='git'>GET IN TOUCH</h1>
                    <a className='mail' href='mailto:mathezh1@gmail.com'>
                        mathezh1@gmail.com
                    </a>
                </div>
                <div className='contact-content-two'>
                    <h1 className='also'>ALSO CHECK</h1>
                    <div className='icons'>
                        <a href='https://github.com/MATHESH31' target="_blank">
                            <GitHub sx={gitStyle} />
                        </a>
                        <a href='https://www.linkedin.com/in/mathesh-nagendran-4a636097/' target='_blank'>
                            <LinkedIn sx={linkedInStyle} />
                        </a>
                        <a href='https://www.instagram.com/_m.a.t.h.e.z.h_/' target="_blank">
                            <Instagram sx={instaStyle}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact