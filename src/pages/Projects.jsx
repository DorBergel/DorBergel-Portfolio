import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Projects.css'; 
import generalData from '../data/general.json';

const Projects = () => {
    return (
        <div className="projects">
            <section className="projects-section">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            <Row className="project-row">
                {
                    generalData["projects-page"].map((project, index) => (
                        <Col sm={12} md={4} key={index}>
                            <div className="project-card">
                                <img src={project.basicProjectCard.projectImage} alt={project.basicProjectCard.projectName} className="project-image" />
                                <h2>{project.basicProjectCard.projectName}</h2>
                                <p>{project.basicProjectCard.shortDescription}</p>
                                <div className="project-tech">
                                    {project.basicProjectCard.technologiesUsed.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a className="project-link">View Details</a>
                                    <a href={project.basicProjectCard.github} className="project-link">Git Hub</a>
                                </div>
                            </div>
                        </Col>
                    ))
                }
                {/*<Col sm={12} md={4}>
                    <div className="project-card">
                        <img src="/images/project1.jpg" alt="Project 1" className="project-image" />
                        <h2>Project name</h2>
                        <p>Description of Project 1</p>
                        <div className="project-tech">
                        </div>
                        <div className="project-links">
                            <a href="#" className="project-link">View Details</a>
                            <a href="#" className="project-link">Git Hub</a>
                        </div>
                    </div>
                </Col>*/}
                <Col sm={12} md={4}>
                    <div className="project-card">
                        <img src="/images/project1.jpg" alt="Project 1" className="project-image" />
                        <h2>Project name</h2>
                        <p>Description of Project 1</p>
                        <div className="project-tech">
                        </div>
                        <div className="project-links">
                            <a href="#" className="project-link">View Details</a>
                            <a href="#" className="project-link">Git Hub</a>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4}>
                    <div className="project-card">
                        <img src="/images/project1.jpg" alt="Project 1" className="project-image" />
                        <h2>Project name</h2>
                        <p>Description of Project 1</p>
                        <div className="project-tech">
                        </div>
                        <div className="project-links">
                            <a href="#" className="project-link">View Details</a>
                            <a href="#" className="project-link">Git Hub</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="project-row">
                <Col sm={12} md={12}>
                    <div className="project-extended">
                        <div className="project-header">
                            <h2>Extended Project Name</h2>
                            <p>Extended description of the project, including technologies used and key features.</p>
                        </div>
                        <div className="project-image">
                            <img src="/images/project2.jpg" alt="Extended Project" className="project-image" />
                        </div>
                        <div className="project-content">
                            <div className="project-objective">
                                <h3>Objective</h3>
                                <p>Explain the main goal of the project and what it aims to achieve.</p>
                            </div>
                            <div className="project-key-achievements">
                                <h3>Key Achievements</h3>
                                <ul>
                                    <li>Achievement 1</li>
                                    <li>Achievement 2</li>
                                    <li>Achievement 3</li>
                                </ul>
                            </div>
                            <div className="technologies-implemented">
                                <h3>Technologies Implemented</h3>
                                <ul>
                                    <li>Technology 1</li>
                                    <li>Technology 2</li>
                                    <li>Technology 3</li>
                                </ul>
                            </div>
                            <div className="impact-and-future-work">
                                <h3>Impact and Future Work</h3>
                                <p>Discuss the impact of the project and any future work planned.</p>
                            </div>
                            </div>

                    </div>
                </Col>
            </Row>
            </section>
        </div>
    );
};

export default Projects;