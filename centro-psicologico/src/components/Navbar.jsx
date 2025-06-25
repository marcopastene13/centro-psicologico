import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarCentro = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#inicio" className="fw-bold text-primary">
          Centro Psicológico Maipú
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#sobre-nosotras">Sobre nosotras</Nav.Link>
            <Nav.Link href="#equipo">Nuestro equipo</Nav.Link>
            <Nav.Link href="#agenda">Agenda</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCentro;
