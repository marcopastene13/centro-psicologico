import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Profesional.css";

const profesionales = [
  {
    id: "1",
    nombre: "Patricia Santander",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/patricia-santander.jpg",
    precioOnline: "$25.000",
    precioPresencial: "$30.000",
  },
  {
    id: "2",
    nombre: "Yasna Valdés",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/yasna.jpg",
    precioOnline: "$25.000",
    precioPresencial: "$30.000",
  },
  {
    id: "3",
    nombre: "Nuevo Profesional",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/profesional3.jpg",
    precioOnline: "$20.000",
    precioPresencial: "$28.000",
  },
];

const Profesional = () => {
  const { id } = useParams();
  const profesional = profesionales.find((p) => p.id === id);

  if (!profesional) {
    return (
      <Container>
        <h2>Profesional no encontrado</h2>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "60px" }}>
  <Row>
    <Col md={6} className="d-flex align-items-center">
      <img
        src={profesional.imagen}
        alt={profesional.nombre}
        className="img-fluid"
      />
    </Col>
    <Col md={6}>
      <Card className="p-4">
        <Card.Title>{profesional.nombre}</Card.Title>
        <Card.Text>{profesional.descripcion}</Card.Text>
        <ul>
          <li><strong>Consulta online:</strong> {profesional.precioOnline}</li>
          <li><strong>Consulta presencial:</strong> {profesional.precioPresencial}</li>
        </ul>
        <Button variant="primary">Agendar hora</Button>
      </Card>
    </Col>
  </Row>
</Container>

  );
};

export default Profesional;
