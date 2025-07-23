import React, { useRef } from "react";
import "../styles/Contact.css"; // Assuming you want to reuse some styles from Home.css
import { Row, Col, Button, FormGroup, Stack } from "react-bootstrap";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import generalData from "../data/general.json";
import "../styles/colors.css";

const Contact = () => {
  const form = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    emailjs
      .sendForm(
        "service_xfz6br9", // Replace with your EmailJS service ID
        "template_frc1p4b", // Replace with your EmailJS template ID
        form.current,
        "nxh9PKOgCa5SOxOUB" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 3000,
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again later.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      });
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

  return (
    <div className="contact">
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
          <form ref={form} className="contact-form" onSubmit={handleFormSubmit}>
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
    </div>
  );
};

export default Contact;
