import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/solologo.centro..png"; // Asegúrate de que la ruta sea correcta
import "./NavbarCentro.css";

const NavbarCentro = () => {
  return (
    <Navbar expand="lg" fixed="top" className="shadow-sm navbar">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-primary d-flex align-items-center"
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          Centro Psicológico Maipú
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/equipo">Nuestro equipo</Nav.Link>
            <Nav.Link as={Link} to="/agenda">Agenda</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCentro;
