import React from 'react'
import './Skills.css'
import htmlSvg from '../../assets/logos/html.svg'
import cssSvg from '../../assets/logos/css.svg'
import jsSvg from '../../assets/logos/javascript.svg'
import reactSvg from '../../assets/logos/react.svg'
import materialUiSvg from '../../assets/logos/material-ui.svg'
import javaSvg from '../../assets/logos/java.svg'
import springBootSvg from '../../assets/logos/spring-boot.svg'
import springWebfluxSvg from '../../assets/logos/spring.svg'
import mongoDbSvg from '../../assets/logos/mongodb.svg'
import sqlSvg from '../../assets/logos/postgresql.svg'
import kafkaSvg from '../../assets/logos/kafka.svg'
import redisSvg from '../../assets/logos/redis.svg'
import dockerSvg from '../../assets/logos/docker.svg'
import kubernetesSvg from '../../assets/logos/kubernetes.svg'
import linuxSvg from '../../assets/logos/linux.svg'
import apacheHadoopSvg from '../../assets/logos/hadoop.svg'
import apacheSparkSvg from '../../assets/logos/spark.svg'
import awsSvg from '../../assets/logos/aws.svg'
import clickhouseSvg from '../../assets/logos/clickhouse-yellow-badge.svg'

const skillGroups = [
    {
        title: 'Frontend',
        description: 'Current active learning area to complement backend delivery.',
        skills: [
            { id: 1, name: 'HTML', icon: htmlSvg, learning: true },
            { id: 2, name: 'CSS', icon: cssSvg, learning: true },
            { id: 3, name: 'JavaScript', icon: jsSvg, learning: true },
            { id: 4, name: 'React', icon: reactSvg, learning: true },
            { id: 5, name: 'Material UI', icon: materialUiSvg, learning: true },
        ],
    },
    {
        title: 'Backend',
        description: 'Primary experience area for production engineering.',
        skills: [
            { id: 6, name: 'Java', icon: javaSvg, learning: false },
            { id: 7, name: 'Spring Boot', icon: springBootSvg, learning: false },
            { id: 8, name: 'Spring WebFlux', icon: springWebfluxSvg, learning: false },
            { id: 9, name: 'MongoDB', icon: mongoDbSvg, learning: false },
            { id: 10, name: 'PostgreSQL', icon: sqlSvg, learning: false },
            { id: 11, name: 'Kafka', icon: kafkaSvg, learning: false },
            { id: 12, name: 'Redis', icon: redisSvg, learning: false },
        ],
    },
    {
        title: 'Platform & Data',
        description: 'Operational tooling and big-data exposure around delivery workflows.',
        skills: [
            { id: 13, name: 'Docker', icon: dockerSvg, learning: false },
            { id: 14, name: 'Kubernetes', icon: kubernetesSvg, learning: true },
            { id: 15, name: 'Linux', icon: linuxSvg, learning: false },
            { id: 16, name: 'Apache Hadoop', icon: apacheHadoopSvg, learning: true },
            { id: 17, name: 'Apache Spark', icon: apacheSparkSvg, learning: true },
            { id: 18, name: 'AWS', icon: awsSvg, learning: true },
            { id: 19, name: 'Clickhouse', icon: clickhouseSvg, learning: true}
        ],
    },
]

const filters = [
    { id: 'all', label: 'All' },
    { id: 'experienced', label: 'Hands-on' },
    { id: 'learning', label: 'Learning' },
]

const Skills = () => {
    const [activeFilter, setActiveFilter] = React.useState('all')

    const filteredGroups = skillGroups
        .map((group) => ({
            ...group,
            skills: group.skills.filter((skill) => {
                if (activeFilter === 'all') {
                    return true
                }

                return activeFilter === 'learning' ? skill.learning : !skill.learning
            }),
        }))
        .filter((group) => group.skills.length > 0)

    return (
        <section className="skills-page">
            <div className="skills-page__header">
                <span className="section-kicker">Capabilities</span>
                <h1 className="section-heading">Technologies I use across application development and delivery.</h1>
                <p className="section-copy">Backend engineering is the strongest area, supported by frontend and platform tooling.</p>
                <div className="skills-page__filters" role="tablist" aria-label="Skill filters">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            type="button"
                            role="tab"
                            aria-selected={activeFilter === filter.id}
                            className={`skills-page__filter ${activeFilter === filter.id ? 'is-active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="skills-groups">
                {filteredGroups.map((group) => (
                    <article key={group.title} className="skills-group section-panel">
                        <div className="skills-group__header">
                            <h2>{group.title}</h2>
                            <p>{group.description}</p>
                        </div>
                        <div className="skills-group__grid">
                            {group.skills.map((skill) => (
                                <div key={skill.id} className="skill-card">
                                    <div className={`skill-card__icon ${skill.learning ? 'is-learning' : 'is-experienced'}`}>
                                        <img src={skill.icon} alt={skill.name} />
                                    </div>
                                    <div className="skill-card__meta">
                                        <h3>{skill.name}</h3>
                                        <span>{skill.learning ? 'Learning' : 'Experience'}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Skills
