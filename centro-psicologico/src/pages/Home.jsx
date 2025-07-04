import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Equipo from "../components/Equipo";
import Novedades from "../components/Novedades"; // Importamos el componente novedades
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-jumbotron d-flex align-items-center">
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
          backgroundColor: "#6495ED",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>Novedades en Psicología</h2>
      </div>

      <Novedades />

      <div
        style={{
          textAlign: "center",
          backgroundColor: "#6495ED",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>Nuestras Profesionales</h2>
      </div>

      <section id="equipo">
        <Equipo />
      </section>
    </>
  );
};

export default Home;
