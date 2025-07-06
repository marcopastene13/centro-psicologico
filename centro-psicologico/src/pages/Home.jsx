import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Equipo from "../components/Equipo";
import Novedades from "../components/Novedades";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        className="home-jumbotron d-flex align-items-center"
        style={{
          backgroundImage: "url('/logo.centro.jpg')", // Ruta de tu imagen
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "90vh",
          position: "relative",
          color: "white",
        }}
      >
        <div className="home-overlay"></div>
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="display-4 fw-bold">Centro Psicológico Maipú</h1>
              <p className="lead">
                Bienvenidos al Centro Psicológico y Peritajes Centenario de
                Maipú, un espacio destinado a entregar un servicio
                Psicoterapéutico de calidad a las personas.
              </p>
              <a href="#contacto" className="btn btn-outline-light btn-lg mt-3">
                Agenda tu primera sesión
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          textAlign: "center",
          backgroundColor: "#7abfa2",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>Nuestras Profesionales</h2>
      </div>

      <section id="equipo">
        <Equipo />
      </section>

      <div
        style={{
          textAlign: "center",
          backgroundColor: "#7abfa2",
          padding: "20px",
          marginTop: "10px",
        }}
      >
        <h2>Novedades en Psicología</h2>
      </div>

      <Novedades />
    </>
  );
};

export default Home;
