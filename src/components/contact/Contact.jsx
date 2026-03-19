import './Contact.css'
import { GitHub, Instagram, LinkedIn, MailOutline } from '@mui/icons-material'
import myAnimatedImage from '../../assets/mathesh_nagendran_animated.png'

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/MATHESH31',
        icon: <GitHub />,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mathesh-nagendran-4a636097/',
        icon: <LinkedIn />,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/_m.a.t.h.e.z.h_/',
        icon: <Instagram />,
    },
]

const Contact = () => {
    return (
        <section className="contact-page">
            <div className="contact-panel section-panel">
                <div className="contact-panel__content">
                    <span className="section-kicker">Contact</span>
                    <h1 className="section-heading">Open to backend roles, product engineering opportunities, and collaboration.</h1>
                    <p className="section-copy">For professional inquiries, feel free to reach out by email or connect through the platforms below.</p>
                    <a className="contact-panel__email" href="mailto:mathezh1@gmail.com">
                        <MailOutline />
                        mathezh1@gmail.com
                    </a>
                    <div className="contact-panel__socials">
                        {socialLinks.map((link) => (
                            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-panel__social-link">
                                {link.icon}
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="contact-panel__visual">
                    <div className="contact-panel__visual-frame">
                        <img src={myAnimatedImage} alt="Animated portrait of Mathesh Nagendran" className="contact-panel__image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
