import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./Equipo.css";

const profesionales = [
  {
    id: 1,
    nombre: "Patricia Santander",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/patricia-santander.jpg",
  },
  {
    id: 2,
    nombre: "Yasna Valdés",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/yasna.jpg",
  },
  {
    id: 3,
    nombre: "Nuevo Profesional",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/profesional3.jpg",
  },
];

const Equipo = () => {
  return (
    <Container className="my-5">
      <Row>
        {profesionales.map(({ id, nombre, descripcion, imagen }) => (
          <Col key={id} md={4} className="d-flex">
            <Card className="equipo-card">
              <div className="equipo-image-wrapper">
                <img src={imagen} alt={nombre} />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="equipo-title">{nombre}</Card.Title>
                <Card.Text className="equipo-description flex-grow-1">
                  {descripcion}
                </Card.Text>
                <div className="equipo-button-wrapper">
                  <Button
                    href={`/profesionales/${id}`}
                    variant="primary"
                    className="equipo-button"
                  >
                    Más información
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Equipo;
