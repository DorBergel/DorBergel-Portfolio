import React from "react";
import "../styles/Home.css";
import { Row, Col, Stack, Button, FormGroup } from "react-bootstrap";
import "../styles/colors.css";
import generalData from "../data/general.json";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar"; // Import the Navbar component
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const form = React.useRef();
  const navigate = useNavigate();

  // Handle Download Resume
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/files/Dor_Bergel_Resume.pdf"; // Adjust the path to your resume file
    link.download = "Dor_Bergel_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Region: Contact Handlers
  const handleOnGmailClick = () => {
    // Copy the email address to the clipboard
    navigator.clipboard
      .writeText(generalData.Shared.contact.email)
      .then(() => {
        console.log("Email address copied to clipboard");
        // Notify the user that the email address has been copied
        toast.success("Email copied to clipboard!", {
          position: "bottom-right",
          autoClose: 3000,
        });
      })
      .catch((err) => {
        console.error("Failed to copy email address: ", err);
        toast.error("Failed to copy email address");
      });
  };

  const handleOnGithubClick = () => {
    window.open(
      generalData.Shared.contact.github,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleOnLinkedInClick = () => {
    window.open(
      generalData.Shared.contact.linkedin,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Send the recipient's email using EmailJS
    emailjs
      .sendForm(
        "service_xfz6br9",
        "template_frc1p4b",
        form.current,
        "nxh9PKOgCa5SOxOUB"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
        form.current.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    emailjs
      .sendForm(
        "service_wogw7sg",
        "template_7a8olhi",
        form.current,
        "nxh9PKOgCa5SOxOUB"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
        form.current.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again later.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      });
  };

  // Endregion

  return (
    <div className="home">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <section className="hero">
        <Row className="hero-row">
          <Col md={6} sm={12} className="hero-text">
            <h1>{generalData.Home.name}</h1>
            <h2>{generalData.Home.title}</h2>
            <Button variant="primary">Download CV</Button>
          </Col>
          <Col md={6} sm={12} className="hero-image-col">
            <img src="/images/profile1.png" alt="Hero" className="hero-image" />
          </Col>
        </Row>
      </section>
      <section className="about">
        <h1>About Me</h1>
        <p>{generalData.Home.about_me_summary}</p>

        <section className="tech-slider-wrapper">
          <div className="tech-slider">
            {/* First set of icons */}
            {generalData.Shared.carouselSkills.map((skill, index) => (
              <div key={`first-${index}`} className="tech-icon">
                <img
                  src={`/icons/${skill}.svg`}
                  alt={`${skill}-icon`}
                  className="tech-icon"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  onLoad={(e) => {
                    e.target.style.display = "block";
                  }}
                />
                <p>{skill}</p>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {generalData.Shared.carouselSkills.map((skill, index) => (
              <div key={`second-${index}`} className="tech-icon">
                <img
                  src={`/icons/${skill}.svg`}
                  alt={`${skill}-icon`}
                  className="tech-icon"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  onLoad={(e) => {
                    e.target.style.display = "block";
                  }}
                />
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className="projects">
        <div className="projects-header">
          <h1>Projects</h1>
        </div>
        <Row className="project-row">
          <Col md={4} sm={12}>
            <Stack gap={4}>
              {<ProjectCard project={generalData.Shared.projects[0]} />}
              {<ProjectCard project={generalData.Shared.projects[2]} />}
            </Stack>
          </Col>
          <Col md={4} sm={12} className="project-card-col">
            {<ProjectCard project={generalData.Shared.projects[1]} />}
          </Col>

          <div className="for-more-button">
            <a
              onClick={() => {
                navigate("/projects");
              }}
            >{`>`}</a>
          </div>
        </Row>
      </section>
      <section className="contact">
        <div className="contact-header">
          <h1>Contact Me</h1>
          <p> Feel free to reach out for any inquiries or collaborations</p>
        </div>
        <Row className="contact-row">
          <Col md={3} sm={12} className="contact-col">
            <Stack
              gap={3}
              className="contact-info"
              style={{ alignItems: "center" }}
            >
              <div className="contact-item" onClick={handleOnGmailClick}>
                <img src="/icons/gmail.svg" alt="Email Icon" />
                <span>
                  <b>{generalData.Shared.contact.email}</b>
                </span>
              </div>
              <div className="contact-item" onClick={handleOnGithubClick}>
                <img src="/icons/github.svg" alt="GitHub Icon" />
                <span>
                  <b>GitHub</b>
                </span>
              </div>
              <div className="contact-item" onClick={handleOnLinkedInClick}>
                <img src="/icons/linkedin.svg" alt="LinkedIn Icon" />
                <span>
                  <b>LinkedIn</b>
                </span>
              </div>
            </Stack>
          </Col>
          <Col md={8} sm={12} className="contact-col">
            <form
              ref={form}
              className="contact-form"
              onSubmit={handleFormSubmit}
            >
              <FormGroup className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </FormGroup>
              <Button type="submit" variant="primary">
                Send Message
              </Button>
            </form>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Home;
