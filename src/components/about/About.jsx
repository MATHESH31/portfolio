import Button from '@mui/joy/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import myImage from '../../assets/mathesh_nagendran.svg'
import './About.css'
import { useNavigate } from 'react-router-dom'

const focusAreas = ['Java', 'Spring', 'React', 'Kafka', 'MongoDB', 'Docker', 'Jenkins']

const stats = [
    {
        title: 'Experience',
        value: '3+ years',
        description: 'Building backend-heavy applications in product environments.',
        icon: <WorkOutlineIcon />,
    },
    {
        title: 'Project mix',
        value: '12 builds',
        description: 'Internal delivery, personal products, and proof-of-concept engineering.',
        icon: <RocketLaunchIcon />,
    },
]

const About = () => {
    const navigate = useNavigate()

    return (
        <section className="about-page">
            <div className="about-hero">
                <div className="about-hero__content">
                    <span className="section-kicker">Software Developer</span>
                    <h1 className="section-heading about-hero__title">Software Developer focused on backend systems and modern web applications.</h1>
                    <p className="section-copy about-hero__copy">
                        I work primarily with Java and Spring-based technologies, building reliable backend services for
                        product environments and business-critical workflows.
                    </p>
                    <p className="section-copy about-hero__copy">
                        My experience includes IoT platforms, system integrations, rule evaluation, and data-oriented
                        applications, with growing frontend experience in React.
                    </p>
                    <div className="about-hero__actions">
                        <Button
                            className="about-hero__button about-hero__button--primary"
                            onClick={() => navigate('/projects')}
                            endDecorator={<ArrowForwardIcon />}
                        >
                            View projects
                        </Button>
                        <Button
                            variant="outlined"
                            className="about-hero__button about-hero__button--secondary"
                            onClick={() => navigate('/contact')}
                        >
                            Get in touch
                        </Button>
                    </div>
                    <ul className="pill-list">
                        {focusAreas.map((area) => (
                            <li key={area}>{area}</li>
                        ))}
                    </ul>
                </div>
                <div className="about-hero__visual section-panel">
                    <div className="about-hero__image-wrap">
                        <img src={myImage} alt="Portrait of Mathesh Nagendran" className="about-hero__image" />
                    </div>
                    <div className="about-hero__intro-card">
                        <p>Currently working at Bluenett, formerly Lantrasoft</p>
                        <p>Backend development, integrations, and full-stack growth</p>
                    </div>
                </div>
            </div>
            <div className="about-stats">
                {stats.map((stat) => (
                    <article key={stat.title} className="about-stat-card section-panel">
                        <div className="about-stat-card__icon">{stat.icon}</div>
                        <p className="about-stat-card__label">{stat.title}</p>
                        <h2>{stat.value}</h2>
                        <p className="about-stat-card__copy">{stat.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default About
