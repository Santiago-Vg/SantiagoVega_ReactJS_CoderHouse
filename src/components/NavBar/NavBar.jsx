import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
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
          <Link to="/nosotros" className="nav-item nav-link">
            nosotros
          </Link>
          <Link to="/contacto" className="nav-item nav-link">
            contacto
          </Link>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>|</span> productos
            </a>
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
          <div>
            <input type="text" placeholder="buscar" />
          </div>
          <div>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
