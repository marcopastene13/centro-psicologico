import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./QuienesSomos.css";
import fondoImg from "../assets/fondo.jpg"; // ajusta la ruta según tu estructura

// Luego, úsalo en el JSX:
<Image
  src={fondoImg}
  alt="Imagen centro psicológico"
  fluid
  rounded
  className="quienes-somos-image"
/>;

const QuienesSomos = () => {
  return (
    <Container className="quienes-somos my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="mb-4">¿Quiénes Somos?</h2>
          <p>
            En el Centro Psicológico Centenario Maipú ofrecemos atención
            psicoterapéutica integral y especializada para niños, adolescentes y
            adultos. Nuestro equipo está compuesto por profesionales con amplia
            experiencia y compromiso con el bienestar emocional y la salud
            mental de cada persona que atendemos.
          </p>
          <p>
            Brindamos un espacio seguro y respetuoso donde cada historia es
            escuchada, y diseñamos procesos terapéuticos personalizados, con
            enfoque actualizado y basado en evidencia científica.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <div className="quienes-somos-image-container">
            <Image
              src={fondoImg}
              alt="Imagen centro psicológico"
              className="quienes-somos-image"
              fluid
              rounded
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuienesSomos;
