import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "../styles/Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import generalData from "../data/general.json";

const Projects = () => {
  const [selectedCard, setSelectedCard] = React.useState(
    generalData.Shared.projects[0]
  );

  // Create a ref for the project content section
  const projectContentRef = React.useRef(null);

  // Function to handle card click and scroll
  const handleCardClick = (project) => {
    setSelectedCard(project);
    // Scroll to project content after state update
    setTimeout(() => {
      if (projectContentRef.current) {
        projectContentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
              {generalData.Shared.projects.map((project, index) => (
                <div key={index} className="carousel-item-wrapper">
                  <div className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt={project.projectName} />
                    </div>
                    <h2>{project.projectName}</h2>
                    <p>{project.shortDescription}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        className="project-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(project);
                        }}
                      >
                        View Details
                      </a>
                      <a
                        href={project.link}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
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
        <Row className="project-row" ref={projectContentRef}>
          <Col sm={12} className="project-extended">
            {selectedCard && (
              <div className="project-extended-details">
                <div className="project-header">
                  <h2>{selectedCard.projectName}</h2>
                  <p>{selectedCard.description}</p>
                </div>
                <div className="project-image">
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.projectName}
                  />
                </div>
                <hr />
                <div className="project-content">
                  <Row className="project-content-row">
                    <Col lg={4} sm={12} className="project-content-col">
                      <div className="project-objective">
                        <h3>Objective</h3>
                        <p>{selectedCard.objective}</p>
                      </div>
                    </Col>
                    <Col lg={4} sm={12} className="project-content-col">
                      <div className="project-key-achievements">
                        <h3>Key Achievements</h3>
                        <ul>
                          {selectedCard.keyAchievements.map(
                            (achievement, index) => (
                              <li key={index}>{achievement}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                  <Row className="project-content-row">
                    <Col lg={4} sm={12} className="project-content-col">
                      <div className="project-technologies">
                        <h3>Technologies Used</h3>
                        <div className="tech-tags">
                          {selectedCard.technologies.map((tech, index) => (
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
                        <p>{selectedCard.impactAndFutureWork}</p>
                      </div>
                    </Col>
                  </Row>
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
