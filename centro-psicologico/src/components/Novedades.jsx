import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Novedades.css"; // Asegúrate de tener estilos para la sección

const novedadesData = [
  {
    titulo: "Tendencias en psicología para 2025 según la APA",
    texto:
      "Explora los desafíos modernos como IA, salud global y nuevas formas de terapia.",
    enlace: "https://www.infocop.es/principales-tendencias-que-la-psicologia-debe-tener-cuenta-en-2025-segun-la-apa/",
  },
  {
    titulo: "Psicología y bienestar emocional",
    texto:
      "Reflexiones actuales sobre salud mental, relaciones, ansiedad y autocuidado emocional.",
    enlace: "https://elpais.com/eps/psicologia-y-bienestar/",
  },
  {
    titulo: "Tendencias psicosociales 2025: impacto en niños",
    texto:
      "Analiza cómo la hiperconectividad y ansiedad ambiental afectan la infancia.",
    enlace: "https://www.infans.cat/como-las-nuevas-tendencias-psicosociales-de-2025-pueden-impactar-en-la-salud-emocional-de-tus-hijos/",
  },
];

const Novedades = () => {
  return (
    <Container className="blog-section">
      <Row className="mt-3">
        {novedadesData.map(({ titulo, texto, enlace }, idx) => (
          <Col md={4} key={idx}>
            <Card className="mb-3" style={{
          borderColor: "#bfa2bf ",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "10px",
          color: "white",
          textAlign: "center",        }}>
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
