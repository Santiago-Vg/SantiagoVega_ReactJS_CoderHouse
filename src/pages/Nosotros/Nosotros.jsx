// REACT COMPONENTS
import React from "react";
// COMPONENTS
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
// CSS
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div>
      <Navbar />
      <div className="nosotros_container d-flex justify-content-center align-items-center">
        Nosotros
      </div>
      <Footer />
    </div>
  );
};

export default Nosotros;
