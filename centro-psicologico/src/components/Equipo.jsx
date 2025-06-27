import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "./Equipo.css";

const profesionales = [
  {
    id: "1",
    nombre: "Patricia Santander",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/patricia-santander.jpg",
  },
  {
    id: "2",
    nombre: "Yasna Valdés",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/yasna.jpg",
  },
  {
    id: "3",
    nombre: "Nuevo Profesional",
    descripcion:
      "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Spa Diploma Internacional en Estrategias Clínicas en Psicoterapia Breve. Diploma Perito en ámbito judicial. UNAB",
    imagen: "/profesional3.jpg",
  },
];

const Equipo = () => {
  return (
    <Container className="my-5">
      {profesionales.map(({ id, nombre, descripcion, imagen }) => (
        <Card key={id} className="equipo-card mb-4">
          <Card.Body className="equipo-card-body d-flex flex-column flex-md-row">
            <div className="equipo-image-wrapper me-4 mb-3 mb-md-0">
              <img
                src={imagen}
                alt={nombre}
                className="img-fluid rounded-circle"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
            <div className="equipo-info flex-grow-1">
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{descripcion}</Card.Text>
              <div className="d-flex justify-content-end">
                <Button href={`/profesionales/${id}`} variant="primary">
                  Más información
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Equipo;
