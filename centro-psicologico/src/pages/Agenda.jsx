import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Agenda = () => {
  return (
    <Container style={{ marginTop: "70px" }}>
      <h2 className="text-center mb-4">Agenda tu Hora</h2>

      <Row>
        <Col md={12}>
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-3">
                Disponibilidad de profesionales
              </Card.Title>
              <div style={{ minHeight: "600px" }}>
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=TU_CALENDARIO_PUBLICO&ctz=America%2FSantiago"
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  title="Agenda Centro Psicológico Maipú"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Agenda;
