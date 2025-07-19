import React from "react";
import "../styles/About.css";
import { Row, Col } from "react-bootstrap";
import "../styles/colors.css";
import generalData from "../data/general.json";
import TechTable from "../components/TechTable";

const About = () => {
  return (
    <div className="about">
      <section className="about-intro">
        <Row className="about-intro-row">
          <Col md={6} sm={12} className="about-intro-col">
            <img
              src="/images/full-hero.png"
              alt="Profile"
              className="profile-image"
            />
          </Col>
          <Col md={6} sm={12} className="about-intro-col">
            <h1>About Me</h1>

            {generalData.About["about-intro"]}
          </Col>
        </Row>
      </section>
      <section className="about-tech">
        <Row className="tech-row">
          <Col md={6} sm={12} className="tech-col">
            <div className="cell work-experience-cell">
              <h1>{generalData.About.work_experience[0].position}</h1>
              <h2>{generalData.About.work_experience[0].company}</h2>
              <h4>{generalData.About.work_experience[0].duration}</h4>
              <ul>
                {generalData.About.work_experience[0].responsibilities.map(
                  (responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  )
                )}
              </ul>
            </div>
          </Col>
          <Col md={6} sm={12} className="tech-col">
            <div className="cell education-cell">
              <h1>{generalData.About.education[0].degree}</h1>
              <h2>{generalData.About.education[0].institution}</h2>
              <h4>{generalData.About.education[0].duration}</h4>
              <ul>
                {generalData.About.education[0].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </section>
      <section className="tech-cards">
        <Row md={6} sm={12} className="h-100">
          <Col md={6} sm={12} className="tech-card-col">
            <TechTable />
          </Col>
          <Col md={6} sm={12} className="tech-card-col">
            <div className="why-choose-me">
              <h1>Why Choose Me?</h1>
              <p>{generalData.About["why-me"]}</p>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default About;
