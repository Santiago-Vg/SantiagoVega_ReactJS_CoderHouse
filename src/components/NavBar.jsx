import React from "react";
import CartWidget from "./CartWidget";

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        buncits.
      </a>
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
          <li className="nav-item active">
            <a className="nav-link" href="#">
              home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              nosotros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              contacto
            </a>
          </li>
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
              <a className="dropdown-item" href="#">
                sofás
              </a>
              <a className="dropdown-item" href="#">
                sillas
              </a>
              <a className="dropdown-item" href="#">
                estanterías
              </a>
              <a className="dropdown-item" href="#">
                gabinetes
              </a>
              <a className="dropdown-item" href="#">
                lámparas
              </a>
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
