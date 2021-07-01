// REACT COMPONENTS
import React from "react";
// COMPONENTS
import ItemCount from "../../StoreView/ItemCount/ItemCount";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// CSS
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  let product = data;

  return (
    <div
      className="row d-flex justify-content-center detail_container py-2"
      key={product.id}
    >
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
        <div
          id="carouselExampleControls"
          className="carousel"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={product.thumbnailUrl}
                className="img-fluid ml-4 mb-3"
                alt={product.title}
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={product.thumbnailUrl2}
                className="img-fluid ml-4 mb-3"
                alt={product.title}
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={product.thumbnailUrl3}
                className="img-fluid ml-4 mb-3"
                alt={product.title}
              ></img>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <div className="d-flex text_container">
          <div className="bar"></div>
          <div className=" text-left">
            <h5 className="product_title">{product.title}</h5>
            <p className="product_desc">{product.description}</p>
            <p className="card-text">{product.price}</p>
            <div className="buy d-flex align-items-center">
              <ItemCount stock={product.stock} />
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/" className="return_btn">
                ← volver.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
