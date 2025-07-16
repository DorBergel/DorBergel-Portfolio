import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "../styles/Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import generalData from "../data/general.json";

const Projects = () => {
    

    const [selectedCard, setSelectedCard] = React.useState(null);

  // Carousel settings
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-dots-custom",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="projects">
      <section className="projects-section">
        <div className="projects-header">
          <h1>Projects</h1>
        </div>
        <Row className="project-row">
          <Col sm={12} className="projects-column">
            <Slider {...settings} className="projects-carousel">
              {generalData["projects-page"].map((project, index) => (
                <div key={index} className="carousel-item-wrapper">
                  <div className="project-card" onClick={() => setSelectedCard(project)}>
                    <div className="project-image">
                    <img
                      src={project.basicProjectCard.projectImage}
                      alt={project.basicProjectCard.projectName}
                      
                    />
                    </div>
                    <h2>{project.basicProjectCard.projectName}</h2>
                    <p>{project.basicProjectCard.shortDescription}</p>
                    <div className="project-tech">
                      {project.basicProjectCard.technologiesUsed.map(
                        (tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                    <div className="project-links">
                      <a className="project-link">View Details</a>
                      <a
                        href={project.basicProjectCard.github}
                        className="project-link"
                      >
                        Git Hub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
        <Row className="project-row">
            <Col sm={12} className="project-extended">
              {selectedCard && (
                <div className="project-extended-details">
                  <div className="project-header">
                    <h2>{selectedCard.extendedProject.header.projectName}</h2>
                    <p>{selectedCard.extendedProject.header.extendedDescription}</p>
                  </div>
                  <div className="project-image">
                    <img
                      src={selectedCard.basicProjectCard.projectImage}
                      alt={selectedCard.extendedProject.header.projectName}
                    />
                  </div>
                  <div className="project-content">
                    <Row className="project-content-row">
                        <Col lg={4} sm={12} className="project-content-col">
                            <div className="project-objective">
                                <h3>Objective</h3>
                                <p>{selectedCard.extendedProject.contentSections.objective}</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} className="project-content-col">
                            <div className="project-key-achievements">
                                <h3>Key Achievements</h3>
                                <ul>
                                {selectedCard.extendedProject.contentSections.keyAchievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className="project-content-row">
                        <Col lg={4} sm={12} className="project-content-col">
                            <div className="project-technologies">
                                <h3>Technologies Used</h3>
                                <div className="tech-tags">
                                    {selectedCard.basicProjectCard.technologiesUsed.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                        {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} className="project-content-col">
                            <div className="project-impact">
                                <h3>Impact</h3>
                                <p>{selectedCard.extendedProject.contentSections.impactAndFutureWork}</p>
                            </div>
                        </Col>
                    </Row>
                    {/*<Row className="project-content-row">
                        <Col md={6} sm={12} className="project-content-col">
                            <div className="project-technologies">
                                <h3>Technologies Used</h3>
                                <div className="tech-tags">
                                    {selectedCard.basicProjectCard.technologiesUsed.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                        {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="project-content-col">
                            <div className="project-impact">
                                <h3>Impact</h3>
                                <p>{selectedCard.extendedProject.contentSections.impactAndFutureWork}</p>
                            </div>
                        </Col>
                    </Row>*/}
                  </div>
                </div>
              )}
            </Col>
        </Row>
      </section>
    </div>
  );
};

export default Projects;

/*
<div className="project-objective">
                        <h3>Objective</h3>
                        <p>{selectedCard.extendedProject.contentSections.objective}</p>
                    </div>
                    <div className="project-key-achievements">
                        <h3>Key Achievements</h3>
                        <ul>
                          {selectedCard.extendedProject.contentSections.keyAchievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                    </div>
                    <div className="project-technologies">
                        <h3>Technologies Used</h3>
                        <div className="tech-tags">
                          {selectedCard.basicProjectCard.technologiesUsed.map((tech, index) => (
                            <span key={index} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                    </div>
                    <div className="project-impact">
                        <h3>Impact</h3>
                        <p>{selectedCard.extendedProject.contentSections["impactAndFutureWork"]}</p>
                    </div>
                    */