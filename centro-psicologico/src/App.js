import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Equipo from "./components/Equipo";
import Profesional from "./pages/Profesional";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/profesionales/:id" element={<Profesional />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
