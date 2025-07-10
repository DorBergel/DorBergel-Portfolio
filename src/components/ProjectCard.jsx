// Assuming generalData.projects is an array of project objects
// each project object has 'name', 'description', 'image', 'link', and 'technologies'
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectCard.css'; // Assuming you have a CSS file for styling the ProjectCard component
import generalData from '../data/general.json'; // Adjust the import path as necessary
import { Button } from 'react-bootstrap';


const ProjectCard = ({ project }) => {
    // Add fallback handling for missing project data
    if (!project) {
        return null;
    }

    return (
        <div className="project-card">

            <div className='top'>
                <h1>{project.name || 'Untitled Project'}</h1>
                {/* SVG icon for repo*/ }
                <div className="repo-icon">
                    <img
                        src="/icons/github.svg"
                        alt="GitHub Icon"
                        className="repo-icon-img"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                        onLoad={(e) => {
                            e.target.style.display = 'block';
                        }}
                        onClick={() => {
                            if (project.link) {
                                window.open(project.link, '_blank', 'noopener,noreferrer');
                            }
                        }
                        }
                    />
                    </div>
                

            </div>
            <div className="content">
                <p>{project.description || 'No description available'}</p>
                <div className="footer">
                    <div className="tech-stack">
                        {project.technologies && project.technologies.length > 0 ? (
                            project.technologies.map((tech) => (
                                <span key={tech} className="tech-item">
                                    {generalData.iconSkills.includes(tech.toLowerCase()) ? (
                                        <img
                                            src={`/icons/${tech.toLowerCase()}.svg`}
                                            alt={`${tech}-icon`}
                                            className="tech-icon"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        tech
                                    )}
                                </span>
                            ))
                        ) : (
                            <span className="tech-item">No technologies listed</span>
                        )}
                    </div>
                    
                </div>
            </div>
            {/*project.image && (
                <div
                    className="overlay"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
            )*/}
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        link: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default ProjectCard;


/*
return (
        <div className="project-card" 
            style={{ backgroundImage: project.image ? `url(${project.image})` : 'none' }}>
            <div className="overlay"></div>
            <div className="content">
                <h1>{project.name || 'Untitled Project'}</h1>
                <p>{project.description || 'No description available'}</p>
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View Project
                    </a>
                )}
                <div className="tech-stack">
                    {project.technologies && project.technologies.length > 0 ? (
                        project.technologies.map((tech, index) => (
                            <span key={index} className="tech-item">
                                {generalData.iconSkills.includes(tech.toLowerCase()) ? (
                                    <img
                                        src={`/icons/${tech.toLowerCase()}.svg`}
                                        alt={`${tech}-icon`}
                                        className="tech-icon"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                        onLoad={(e) => {
                                            e.target.style.display = 'block';
                                        }}
                                    />
                                ) : (
                                    ""
                                )}
                            </span>
                        ))
                    ) : (
                        <span className="tech-item">No technologies listed</span>
                    )}
                </div>
            </div>
        </div>
    );
    
*/