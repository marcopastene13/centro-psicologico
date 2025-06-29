import React, { useState } from "react";
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
    calendarioUrl: "https://calendar.google.com/calendar/embed?src=CORREO_PATY_CALENDARIO&ctz=America/Santiago"
  },
  {
    id: "2",
    nombre: "Yasna Valdés",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/yasna.jpg",
    precioOnline: "$25.000",
    precioPresencial: "$30.000",
    calendarioUrl: "https://calendar.google.com/calendar/embed?src=CORREO_YASNA_CALENDARIO&ctz=America/Santiago"
  },
  {
    id: "3",
    nombre: "Nuevo Profesional",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/profesional3.jpg",
    precioOnline: "$20.000",
    precioPresencial: "$28.000",
    calendarioUrl: "https://calendar.google.com/calendar/embed?src=CORREO_NUEVO_CALENDARIO&ctz=America/Santiago"
  }
];

const Profesional = () => {
  const { id } = useParams();
  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const profesional = profesionales.find((p) => p.id === id);

  if (!profesional) {
    return (
      <Container style={{ marginTop: "70px" }}>
        <h2>Profesional no encontrado</h2>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "70px" }}>
      <Row className="align-items-center">
        {/* Imagen a la izquierda */}
        <Col md={6} className="d-flex justify-content-center">
          <img
            src={profesional.imagen}
            alt={profesional.nombre}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Col>

        {/* Info a la derecha */}
        <Col md={6}>
          <Card className="p-4">
            <Card.Title>{profesional.nombre}</Card.Title>
            <Card.Text>{profesional.descripcion}</Card.Text>
            <ul>
              <li><strong>Consulta online:</strong> {profesional.precioOnline}</li>
              <li><strong>Consulta presencial:</strong> {profesional.precioPresencial}</li>
            </ul>
            <Button
              variant="primary"
              onClick={() => setMostrarCalendario(!mostrarCalendario)}
            >
              {mostrarCalendario ? "Ocultar agenda" : "Agendar hora"}
            </Button>
          </Card>
        </Col>
      </Row>

      {mostrarCalendario && (
        <Row className="mt-4">
          <Col>
            <div className="calendar-embed">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=6e697999cb5ce86c937ccdc8f664ad528f0945b307293f1bac22862ecc94cf1e%40group.calendar.google.com&ctz=America%2FSantiago"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title={`Calendario de ${profesional.nombre}`}
              ></iframe>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Profesional;
