import React from "react";
import "../styles/Home.css";
import { Row, Col, Stack } from "react-bootstrap";
import "../styles/colors.css";
import generalData from "../data/general.json";
import StackIcon from "tech-stack-icons";



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
                  src={`/src/assets/${skill}.svg`}
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
                  src={`/src/assets/${skill}.svg`}
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
    </div>
  );
};

export default Home;

/*
<section className="tech-slider-wrapper">
  <div className="tech-slider">
    {[
      "c++.svg",
      "csharp.svg",
      "python.svg",
      "html5.svg",
      "css3.svg",
      "bootstrap.svg",
      "javascript.svg",
      "react.svg",
      "kotlin.svg",
      "linux.svg",
      "nodejs.svg",
      "jenkins.svg",
      "git.svg",
      "debug.svg"
    ].map((icon, index) => (
      <img
        key={index}
        src={`/src/assets/${icon}`}
        alt={`tech-${index}`}
        className="tech-icon"
      />
    ))}
  </div>
</section>
*/