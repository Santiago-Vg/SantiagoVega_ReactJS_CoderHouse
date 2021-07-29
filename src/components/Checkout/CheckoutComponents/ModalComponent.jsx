// REACT
import React, { useContext } from "react";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// CONTEXT
import { SiteContext } from "../../../context/SiteContext";
// CSS
import "./ModalComponent.css";

const ModalComponent = ({ amount = 0 }) => {
  const { openModal, handleModal } = useContext(SiteContext);

  return openModal ? (
    <div onClick={handleModal} className="modalBackground">
      <div className="modalContainer">
        <div className="modalBorder">
          <p className="modalLogo">Buncits.</p>
          <h2>{amount} producto/s agregado/s al carrito.</h2>
          <div className="d-flex">
            <Link to="/cart">
              <button className="btn mx-2">ver carrito</button>
            </Link>
            <button className="btn btnOut mx-2"> salir</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ModalComponent;
