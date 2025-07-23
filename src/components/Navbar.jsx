import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`site-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <BootstrapNavbar.Brand as={RouterLink} to="/">
          Dor Bergel
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={RouterLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
