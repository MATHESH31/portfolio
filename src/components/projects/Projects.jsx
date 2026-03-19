import React from 'react'
import './Projects.css'
import projectJson from '../../staticData/projects.json'
import { GitHub, Language, LinkedIn } from '@mui/icons-material'

const sections = ['Professional', 'Personal', 'POC']

const Projects = () => {
    const [section, setSection] = React.useState('Professional')

    const filteredProjects = projectJson.filter((project) => project.type === section)

    return (
        <section className="projects-page">
            <div className="projects-page__header">
                <span className="section-kicker">Selected Work</span>
                <h1 className="section-heading">Selected projects across professional work, personal builds, and experiments.</h1>
                <p className="section-copy">A mix of product delivery, independent development, and technical exploration.</p>
            </div>

            <div className="projects-tabs section-panel" role="tablist" aria-label="Project categories">
                {sections.map((tab) => (
                    <button
                        key={tab}
                        type="button"
                        role="tab"
                        aria-selected={section === tab}
                        className={`projects-tabs__button ${section === tab ? 'is-active' : ''}`}
                        onClick={() => setSection(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => {
                    const hasLinks = Boolean(project.linkedInLink || project.url || project.githubLink.length)

                    return (
                        <article key={project.title} className="project-card section-panel">
                            <div className="project-card__header">
                                <span className="project-card__type">{project.type}</span>
                                <h2>{project.title}</h2>
                            </div>
                            <div className="project-card__body">
                                <p className="project-card__description">{project.description}</p>
                                <div className="project-card__stack">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="project-card__tech">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-card__links">
                                {project.linkedInLink && (
                                    <a href={project.linkedInLink} target="_blank" rel="noreferrer" className="project-card__link">
                                        <LinkedIn fontSize="small" />
                                        LinkedIn
                                    </a>
                                )}
                                {project.url && (
                                    <a href={project.url} target="_blank" rel="noreferrer" className="project-card__link">
                                        <Language fontSize="small" />
                                        Live link
                                    </a>
                                )}
                                {project.githubLink.map((link, index) => (
                                    <a key={`${project.title}-${index}`} href={link} target="_blank" rel="noreferrer" className="project-card__link">
                                        <GitHub fontSize="small" />
                                        GitHub {project.githubLink.length > 1 ? index + 1 : ''}
                                    </a>
                                ))}
                                {!hasLinks && <span className="project-card__link project-card__link--muted">Private or internal work</span>}
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
