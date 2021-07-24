import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./NavBar.css";
import { CartContext } from "../../context/CartContext";

import SearchImput from "./SearchImput";

const NavBar = () => {
  const { isInStore } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <Link to="/" className="navbar-brand">
        buncits.
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            home
          </Link>
          <ScrollLink
            to="nosotros"
            className={
              isInStore ? "nav-item nav-link disabled" : "nav-item nav-link"
            }
            smooth={true}
          >
            nosotros
          </ScrollLink>
          <ScrollLink
            to="productos"
            className={
              isInStore ? "nav-item nav-link disabled" : "nav-item nav-link"
            }
            smooth={true}
          >
            productos
          </ScrollLink>
          <Link to="/store" className="navi-item nav-link store">
            <span>|</span>tienda
          </Link>
          <li className="nav-item dropdown">
            <Link
              to="/store"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              categorías
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/sofas" className="dropdown-item">
                sofas
              </Link>
              <Link to="/sillas" className="dropdown-item">
                sillas / sillones
              </Link>
              <Link to="/estanterias" className="dropdown-item">
                estanterías
              </Link>
              <Link to="/gabinetes" className="dropdown-item">
                gabinetes
              </Link>
              <Link to="/lamparas" className="dropdown-item">
                lamparas
              </Link>
            </div>
          </li>
        </ul>
        <div className="widgets d-flex align-items-center">
          {isInStore ? <SearchImput /> : ""}
          <div>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
