import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Novedades.css"; // Asegúrate de tener estilos para la sección

const novedadesData = [
  {
    titulo: "La importancia de la salud mental",
    texto:
      "¿Por qué es esencial cuidar nuestra salud mental para vivir mejor? Conoce más en este artículo.",
    enlace: "https://www.cop.es/index.php?page=La-importancia-de-la-salud-mental",
  },
  {
    titulo: "¿Cuándo acudir al psicólogo?",
    texto:
      "Señales que indican que es momento de buscar ayuda profesional y cómo puede ayudarte la psicoterapia.",
    enlace: "https://www.infocop.es/view_article.asp?id=4715",
  },
  {
    titulo: "Mindfulness y su impacto en la salud",
    texto:
      "Descubre cómo la atención plena puede mejorar tu bienestar emocional y reducir el estrés.",
    enlace: "https://www.psicologiaymente.com/clinica/beneficios-mindfulness",
  },
];

const Novedades = () => {
  return (
    <Container className="blog-section">
      <Row className="mt-3">
        {novedadesData.map(({ titulo, texto, enlace }, idx) => (
          <Col md={4} key={idx}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{texto}</Card.Text>
                <Button className="btn-primary"
                  href={enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Novedades;
