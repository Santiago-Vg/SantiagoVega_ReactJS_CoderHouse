import React from "react";
import { Link } from "react-router-dom";
import "./StoreRoutes.css";

const StoreRoutes = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-wrap mx-5"
      id="productos"
    >
      <Link
        to="/lamparas"
        className="col-10 col-sm-5 col-lg-2 img-link text-center mx-3 my-3"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/buncits-41df0.appspot.com/o/RoutesArtboard-1-copy-5.png?alt=media&token=efb3990e-0aad-495f-949b-ff888c731b9e"
          alt="ruta hacia lámparas"
          className="img-fluid w-100"
        />
      </Link>
      <Link
        to="/sofas"
        className="col-10 col-sm-5 col-lg-2 img-link text-center mx-3 my-3"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/buncits-41df0.appspot.com/o/RoutesArtboard-1.png?alt=media&token=664a34a6-884a-4fff-9420-a12e20806e6d"
          alt="ruta hacia sofás"
          className="img-fluid w-100"
        />
      </Link>
      <Link
        to="/estanterias"
        className="col-10 col-sm-5 col-lg-2 img-link text-center mx-3 my-3"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/buncits-41df0.appspot.com/o/RoutesArtboard-1-copy-3.png?alt=media&token=a7e04e66-d5fa-4929-8074-388ec94ece67"
          alt="ruta hacia estanterías"
          className="img-fluid w-100"
        />
      </Link>
      <Link
        to="/sillas"
        className="col-10 col-sm-5 col-lg-2 img-link text-center mx-3 my-3"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/buncits-41df0.appspot.com/o/RoutesArtboard-1-copy-2.png?alt=media&token=e0bf6098-f97d-4132-af1d-bbafc1ed9dac"
          alt="ruta hacia sillas"
          className="img-fluid w-100"
        />
      </Link>
      <Link
        to="/gabinetes"
        className="col-10 col-sm-5 col-lg-2 img-link text-center mx-3 my-3"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/buncits-41df0.appspot.com/o/RoutesArtboard-1-copy-4.png?alt=media&token=16e63127-a465-45f5-b0a7-79e31b89ef16"
          alt="ruta hacia gabinetes"
          className="img-fluid w-100"
        />
      </Link>
    </div>
  );
};

export default StoreRoutes;
