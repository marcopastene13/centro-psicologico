import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const profesionales = [
  {
    nombre: "Patricia Santander",
    telefono: "+56 9 1234 5678",
    email: "patricia@centropsicologicomaipu.cl",
    facebook: "https://facebook.com/patriciasantander",
    instagram: "https://instagram.com/patriciasantander",
  },
  {
    nombre: "Yasna Valdés",
    telefono: "+56 9 8765 4321",
    email: "yasna@centropsicologicomaipu.cl",
    facebook: "https://facebook.com/yasnavaldes",
    instagram: "https://instagram.com/yasnavaldes",
  },
];

const Contacto = () => {
  return (
    <Container style={{ marginTop: "70px", marginBottom: "40px" }}>
      <h2 className="mb-4 text-center">Contacto</h2>

      <Row className="mb-5">
        <Col md={6}>
          <h4>Dirección</h4>
          <p>Ordoñez 155 oficina 1104, Pedro Montt 1606 oficina 3B, Maipú, Chile</p>
          <div style={{ width: "100%", height: "300px" }}>
            <iframe
              title="Mapa Centro Psicológico Maipú"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.480425356103!2d-70.7815616848007!3d-33.48577998076206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c7a6d18b517b%3A0x4b9ae3df3a2ee8bb!2sOrdo%C3%B1ez%20155%2C%20Maip%C3%BA%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sus!4v1698390000000!5m2!1ses!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Col>

        <Col md={6}>
          <h4>Contacta con nuestras profesionales</h4>
          {profesionales.map(({ nombre, telefono, email, facebook, instagram }, i) => (
            <Card key={i} className="mb-3 p-3 shadow-sm">
              <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                  <strong>Teléfono: </strong> {telefono} <br />
                  <strong>Email: </strong> {email}
                </Card.Text>
                <div>
                  <a href={facebook} target="_blank" rel="noopener noreferrer" style={{ marginRight: 15 }}>
                    <FaFacebook size={24} color="#3b5998" />
                  </a>
                  <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} color="#e4405f" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
