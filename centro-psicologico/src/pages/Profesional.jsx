import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Profesional.css";

const profesionales = [
  {
    id: "1",
    nombre: "Patricia Santander",
    descripcion: "Psicóloga Clínica – Perito Judicial Forense",
    imagen: "/patricia-santander.jpg",
    precioOnline: "$25.000",
    precioPresencial: "$30.000",
    calendarioUrl: "https://calendar.google.com/calendar/embed?src=CORREO_PATY_CALENDARIO&ctz=America/Santiago",
    detalles: (
      <>
        <p>
          Con una sólida trayectoria desde 2016, Patricia Santander se desempeña como Directora y Psicóloga Clínica en el Centro Psicológico Centenario en Maipú. Lidera y supervisa procesos psicoterapéuticos especializados en psicodiagnóstico y psicoterapia individual, trabajando con niños, adolescentes, adultos mayores, parejas y familias. Su compromiso incluye la atención sensible y especializada a víctimas de abuso sexual infantil (ASI), brindando contención y acompañamiento.
        </p>
        <p>
          Paralelamente, Patricia ejerce como Perito Judicial Forense independiente, asesorando jurídicamente en casos relacionados con el ámbito psicológico. Elabora informes psicosociales para causas penales y familiares, evaluaciones de daño psicológico, competencias parentales y participa activamente en entrevistas a imputados y sus familias, aportando desde su experticia clínica al sistema judicial.
        </p>
        <p>Sus principales áreas de trabajo incluyen:</p>
        <ul>
          <li>Psicoterapia clínica para diversos grupos etarios y problemáticas</li>
          <li>Evaluaciones psicológicas y peritajes en contexto judicial</li>
          <li>Diseño e impartición de talleres de habilidades sociales, autoestima y psicoeducación parental</li>
          <li>Formación académica y supervisión de nuevos profesionales</li>
          <li>Participación en programas sociales de reinserción y prevención del maltrato infantil</li>
        </ul>
        <p>Formación Académica y Capacitación:</p>
        <ul>
          <li>Diplomado en Peritaje Psicológico y Social en Contexto Judicial – Universidad Andrés Bello (2023)</li>
          <li>Diplomado Internacional en Estrategias Clínicas de Terapia Breve – ADIPA (2021)</li>
          <li>Psicóloga titulada con distinción – Universidad de Las Américas (2015)</li>
          <li>Cursos y seminarios en psicopatología forense, violencia de género, apego infantil, autocuidado emocional, y grafología.</li>
        </ul>
        <p>
          Patricia combina rigurosidad técnica con empatía, impulsando procesos terapéuticos integrales que promueven la salud mental, la justicia y el bienestar de sus pacientes y comunidades.
        </p>
      </>
    )
  },
  {
    id: "2",
    nombre: "Yasna Valdés",
    descripcion: "Psicóloga Clínica cofundadora en Centro de salud Santander&Valdes. Diplomada en Psicoterapia Breve y Perito Judicial (UNAB).",
    imagen: "/yasna.jpg",
    precioOnline: "$25.000",
    precioPresencial: "$30.000",
    calendarioUrl: "https://calendar.google.com/calendar/embed?src=CORREO_YASNA_CALENDARIO&ctz=America/Santiago"
  },
  {
    id: "3",
    nombre: "Stephany Troncoso",
    descripcion: "Psicóloga – Especialista en Infancia, Adolescencia y Género.",
    imagen: "/stephany-tronco.png",
    precioOnline: "$25.000",
    precioPresencial: "$30.000",
    calendarioUrl: "https://calendar.google.com/calendar/embed?src=CORREO_STEPHANY_CALENDARIO&ctz=America/Santiago",
    detalles: (
      <>
        <p>
          Con un enfoque comprensivo y actualizado, Stephany Troncoso cuenta con formación especializada en el trabajo con niños, niñas, adolescentes y sus familias. Posee un Diplomado en Etnicidad y Género, así como un Diplomado en Terapia Infanto Juvenil, lo que le permite abordar sus procesos terapéuticos desde una mirada integradora, con perspectiva de derechos y enfoque de género.
        </p>
        <p>Su experiencia clínica se centra en el acompañamiento de personas que enfrentan:</p>
        <ul>
          <li>Trastornos de conducta y del estado del ánimo</li>
          <li>Desadaptación escolar</li>
          <li>Trastornos del desarrollo</li>
          <li>Trastornos de ansiedad</li>
          <li>Dificultades relacionales</li>
          <li>Desregulación emocional</li>
          <li>Problemas de autoestima</li>
          <li>Orientación vocacional</li>
        </ul>
        <p>
          Además, brinda orientación a madres, padres y cuidadores en el fortalecimiento de sus habilidades parentales, promoviendo vínculos afectivos seguros y herramientas prácticas para la crianza.
        </p>
        <p>
          Stephany cree profundamente en el valor de cada historia personal, y en el poder de la escucha activa y el acompañamiento terapéutico como caminos hacia el bienestar emocional.
        </p>
      </>
    )
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
        <Col md={6} className="d-flex justify-content-center">
          <img
            src={profesional.imagen}
            alt={profesional.nombre}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Col>

        <Col md={6}>
          <Card className="p-4">
            <Card.Title>{profesional.nombre}</Card.Title>
            <Card.Text>{profesional.descripcion}</Card.Text>

            {profesional.detalles && (
              <Card.Text className="mt-3">{profesional.detalles}</Card.Text>
            )}

            <ul className="mt-3">
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
                src={profesional.calendarioUrl}
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
