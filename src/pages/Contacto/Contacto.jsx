// REACT COMPONENTS
import React from "react";
// COMPONENTS
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
// CSS
import "./Contacto.css";

const Contacto = () => {
  return (
    <div>
      <Navbar />
      <div className="contacto_container d-flex justify-content-center align-items-center">
        Contacto
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
