import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-light">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-2 mb-md-0">
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaInstagram />
              </a>
              <a href="https://github.com/marco-pastene" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaGithub />
              </a>
            </div>
          </Col>

          <Col md={4} className="text-center mb-2 mb-md-0">
            <small>Contacto: contacto@centropsicologicomaipu.cl</small>
          </Col>

          <Col md={4} className="text-center">
            <small>
              Página creada por{" "}
              <a
                href="https://github.com/marcopastene13"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Marco Pastene
              </a>
            </small>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col className="text-center">
            <small>© {new Date().getFullYear()} Centro Psicológico Maipú. Todos los derechos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
