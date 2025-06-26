import React from "react";
import NavbarCentro from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarCentro />
      <Home />
      <Footer />
    </>
  );
}

export default App;
