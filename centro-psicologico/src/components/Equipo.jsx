import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./Equipo.css";

const profesionales = [
  {
    id: 1,
    nombre: "Patricia Santander",
    descripcion:
      "Psicóloga clínica y perito forense, experta en psicoterapia, evaluación judicial y acompañamiento a víctimas",
    imagen: "/patricia-santander.jpg",
  },
  {
    id: 2,
    nombre: "Yasna Valdés",
    descripcion:
      "Psicóloga clínica con amplia experiencia en reparación emocional, psicodiagnóstico, peritajes y neurodesarrollo infantil.",
    imagen: "/yasna.jpg",
  },
  {
    id: 3,
    nombre: "Stephany Troncoso",
    descripcion:
      "Psicóloga especialista en infancia, adolescencia y género. Diplomada en Terapia Infanto Juvenil y Etnicidad y Género.",
    imagen: "/stephany-tronco.png",
  },
];

const Equipo = () => {
  return (
    <Container className="my-5">
      <Row>
        {profesionales.map(({ id, nombre, descripcion, imagen }) => (
          <Col key={id} md={4} className="d-flex">
            <Card
              className="equipo-card"
              style={{
                borderColor: "#bfa2bf ",
                borderWidth: "2px",
                borderStyle: "solid",
                borderRadius: "10px",
                color: "white",
                textAlign: "center",
              }}
            >
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
