// REACT
import React, { useContext, useEffect } from "react";
// CONTECT
import { SiteContext } from "../../context/SiteContext";
// COMPONENTS
import StoreRoutes from "./HomeComponents/StoreRoutes/StoreRoutes";
import { Link as ScrollLink } from "react-scroll";

// CSS
import "./Home.css";

const Home = () => {
  const { setIsInStore, setIsInHome, setSearchImput } = useContext(SiteContext);

  useEffect(() => {
    setIsInStore(false);
    setIsInHome(true);
    setSearchImput("");
  }, [setIsInStore, setIsInHome, setSearchImput]);

  return (
    <div>
      <div className="hero-container d-flex justify-content-center align-items-center ">
        <h2>buncits.</h2>
        <p className="hero-text ml-4 mt-3">modern furniture</p>
      </div>
      <div
        className="info-container d-flex justify-content-between align-items-center flex-wrap"
        id="nosotros"
      >
        <h2>b.</h2>
        <div className="text-container col-lg-3 col-12">
          <h3>quiénes somos</h3>
          <p>
            Somos una empresa con más de 10 años de experiencia dentro del rubro
            del diseño de interiores, creando espacios modernos a partir de
            mobiliario de máxima calidad.
          </p>
        </div>
        <div className="text-container col-lg-3 col-12">
          <h3>qué hacemos</h3>
          <p>
            Comercializamos muebles de diseño contemporáneo para todo tipo de
            espacios, tanto para sitios del hogar como para lugares de trabajo
            como oficinas y comercios.
          </p>
        </div>
        <div className="text-container col-lg-3 col-12">
          <h3>dónde estamos</h3>
          <p>
            Contamos con showroom de exposición en Buenos Aires (CABA), La
            Plata, Córdoba y Mendoza; realizamos envíos a todo el país, Chile,
            Uruguay y Perú.
          </p>
        </div>
      </div>
      <StoreRoutes />
      <div className="d-flex justify-content-center">
        <ScrollLink to="navbar" className="returnBtn" smooth={true}>
          <i className="fas fa-arrow-up d-flex flex-column text-center">
            <span>volver</span>
          </i>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Home;
