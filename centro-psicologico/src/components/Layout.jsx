// Layout.jsx
import React from "react";
import NavbarCentro from "./NavbarCentro";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarCentro />
      <main style={{ paddingTop: "70px", minHeight: "calc(100vh - 140px)" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
