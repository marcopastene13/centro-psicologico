import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Equipo from "../components/Equipo";
import Novedades from "../components/Novedades";
import QuienesSomos from "../components/QuienesSomos";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        className="home-jumbotron d-flex align-items-center"
        style={{
          backgroundImage: "url('/logo.centro.jpg')", // Ruta de tu imagen
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
          position: "relative",
          color: "white",
        }}
      >
        <div className="home-overlay"></div>
      </div>

      <div
        style={{
          borderColor: "#bfa2bf ",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "10px",
          color: "#FFFDD0 ",
          textAlign: "center",
          backgroundColor: "#7abfa2",
          padding: "20px",
          marginTop: "20px",
        }}
      ></div>

      <QuienesSomos />

      <div
        style={{
          borderColor: "#bfa2bf ",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "10px",
          color: "#FFFDD0 ",
          textAlign: "center",
          backgroundColor: "#7abfa2",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>Nuestras Profesionales</h2>
      </div>

      <section id="equipo">
        <Equipo />
      </section>

      <div
        style={{
          borderColor: "#bfa2bf ",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "10px",
          color: "#FFFDD0 ",
          textAlign: "center",
          backgroundColor: "#7abfa2",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>Novedades en Psicología</h2>
      </div>

      <Novedades />
    </>
  );
};

export default Home;
