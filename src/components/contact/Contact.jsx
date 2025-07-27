import { Link } from '@mui/joy';
import AppBar from '../app-bar/AppBar'
import './Contact.css';
import { GitHub, Instagram } from '@mui/icons-material';

const Contact = () => {
    const gitStyle = {
        position: 'absolute',
        bottom: '10vh',
        left: '8vw',
        height: '20vh',
        width: '20vw',
        color: 'var(--home-screen-text-color)',
    }

    const instaStyle = {
        position: 'absolute',
        bottom: '10vh',
        right: '8vw',
        height: '20vh',
        width: '20vw',
        color: 'var(--home-screen-text-color)',
    }



    return (
        <div>
            <AppBar />
            <div className='contact-layout'>
                <div className='animated-portrait'></div>
                <div className='contact-content'>
                    <h1 className='git'>GET IN TOUCH</h1>
                    <a className='mail' href='mailto:mathezh1@gmail.com'>
                        mathezh1@gmail.com
                    </a>
                    <h1 className='also'>ALSO CHECK</h1>
                    <a href='https://github.com/MATHESH31'>
                        <GitHub sx={gitStyle} />
                    </a>
                    <a href='https://www.instagram.com/_m.a.t.h.e.z.h_/'>
                        <Instagram sx={instaStyle}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact