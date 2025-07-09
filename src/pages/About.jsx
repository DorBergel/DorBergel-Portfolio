import React from "react";
import "../styles/About.css";
import { Row, Col } from "react-bootstrap";
import "../styles/colors.css";

const About = () => {
    return (
        <section className="about">
            <h1>About Me</h1>
            <p>
                I’m an IT professional with 2+ years of experience building reliable automated systems and improving software performance. Currently working as an Automation Engineer at Softil, I specialize in Python, C++, and backend development. I bring a detail-oriented and solution-driven mindset to every team I join.

                Whether it’s developing CI/CD pipelines, crafting automation test infrastructure, or diving into low-level C/C++ work, I thrive on turning bugs into features and chaos into clean code.
            </p>
        </section>
    );
};

export default About;