import React from "react";
import { Card, Button, Container } from "react-bootstrap";
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
      {profesionales.map(({ id, nombre, descripcion, imagen }) => (
        <Card key={id} className="equipo-card">
          <Card.Body className="equipo-card-body">
            <div className="equipo-image-wrapper">
              <img src={imagen} alt={nombre} />
            </div>
            <div className="equipo-info">
              <Card.Title className="equipo-title">{nombre}</Card.Title>
              <Card.Text className="equipo-description">
                {descripcion}
              </Card.Text>
              <div className="equipo-button-wrapper">
                <Button variant="primary" className="equipo-button">
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
