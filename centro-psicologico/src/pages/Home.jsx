import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Equipo from "../components/Equipo";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        className="home-jumbotron d-flex align-items-center text-light"
        style={{ marginTop: "56px" }}
      >
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
        style={{ textAlign: "center", backgroundColor: "#eee", padding: "20px", marginTop: "20px" }}
      >
        <h2>Nuestro Equipo</h2>
      </div>

      <section id="equipo">
        <Equipo />
      </section>

      <div
        style={{ textAlign: "center", backgroundColor: "#f8f9fa", padding: "20px", marginTop: "20px" }}
      >
        <h2>Novedades en Psicología</h2>
        <Container>
          <Row className="mt-3">
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>La importancia de la salud mental</Card.Title>
                  <Card.Text>
                    ¿Por qué es esencial cuidar nuestra salud mental para vivir mejor? Conoce más en este artículo.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://www.cop.es/index.php?page=La-importancia-de-la-salud-mental"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leer más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>¿Cuándo acudir al psicólogo?</Card.Title>
                  <Card.Text>
                    Señales que indican que es momento de buscar ayuda profesional y cómo puede ayudarte la psicoterapia.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://www.infocop.es/view_article.asp?id=4715"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leer más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Mindfulness y su impacto en la salud</Card.Title>
                  <Card.Text>
                    Descubre cómo la atención plena puede mejorar tu bienestar emocional y reducir el estrés.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://www.psicologiaymente.com/clinica/beneficios-mindfulness"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leer más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
