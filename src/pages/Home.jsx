import React from "react";
import "../styles/Home.css";
import { Row, Col, Stack } from "react-bootstrap";
import "../styles/colors.css";
import generalData from "../data/general.json";
import StackIcon from "tech-stack-icons";
import ProjectCard from "../components/ProjectCard";



const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <Row className="hero-row">
          <Col md={6} sm={12} className="hero-text" style={{ border: "1px solid black", padding: "20px" }}>
            <h1>{generalData.name}</h1>
            <h2>
              {generalData.title}
            </h2>
            <button className="btn btn-primary">Get Started</button>
          </Col>
          <Col md={6} sm={12} className="hero-image-col" style={{ border: "1px solid black" }}>
            <img src="/public/images/profile1.png" alt="Hero" className="hero-image" />
          </Col>
        </Row>
      </section>

      <section className="about">
        <h1>About Me</h1>
        <p>
          {generalData.summary}
        </p>
        
        <section className="tech-slider-wrapper">
          <div className="tech-slider">
            {/* First set of icons */}
            {generalData.iconSkills.map((skill, index) => (
              <div key={`first-${index}`} className="tech-icon">
                <img
                  src={`/icons/${skill}.svg`}
                  alt={`${skill}-icon`}
                  className="tech-icon"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    e.target.style.display = 'block';
                  }}
                />
                <p>{skill}</p>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {generalData.iconSkills.map((skill, index) => (
              <div key={`second-${index}`} className="tech-icon">
                <img
                  src={`/icons/${skill}.svg`}
                  alt={`${skill}-icon`}
                  className="tech-icon"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    e.target.style.display = 'block';
                  }}
                />
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="projects">
        <h1>Projects</h1>
        <Row className="project-row">
            <Col md={4} sm={12}>
              <Row>
                <Col className="mb-4">
                  <ProjectCard project={generalData.projects[0]} />
                </Col>
                </Row>
                <Row>
                  <Col>
                    <ProjectCard project={generalData.projects[2]} />
                  </Col>
              </Row>
            </Col>
            <Col md={4} sm={12}>
              <ProjectCard project={generalData.projects[1]} />
            </Col>

        </Row>
      </section>
    </div>
  );
};

export default Home;
