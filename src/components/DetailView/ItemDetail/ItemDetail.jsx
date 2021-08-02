// REACT COMPONENTS
import React, { useState, useContext, useEffect } from "react";
// COMPONENTS
import ItemCount from "../../StoreView/ItemCount/ItemCount";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// CONTEXT
import { SiteContext } from "../../../context/SiteContext";
// CSS
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  let {
    id,
    thumbnailUrl,
    thumbnailUrl2,
    thumbnailUrl3,
    title,
    description,
    price,
    stock,
  } = data;

  const { setIsInStore, setIsInHome, setSearchImput } = useContext(SiteContext);

  useEffect(() => {
    setIsInStore(false);
    setIsInHome(false);
    setSearchImput("");
  }, [setIsInStore, setIsInHome, setSearchImput]);

  const [amount, setAmount] = useState(0);

  const updateAmount = (qty) => {
    setAmount(amount + qty);
  };

  return (
    <div
      className="row d-flex justify-content-center detail_container py-2"
      key={id}
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
                src={thumbnailUrl}
                className="img-fluid ml-4 mb-3"
                alt={title}
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={thumbnailUrl2}
                className="img-fluid ml-4 mb-3"
                alt={title}
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={thumbnailUrl3}
                className="img-fluid ml-4 mb-3"
                alt={title}
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
            <h5 className="product_title">{title}</h5>
            <p className="product_desc">{description}</p>
            <p className="card-text">{price}</p>
            <div className="buy d-flex align-items-center">
              {amount > 0 ? (
                <Link to="/cart">
                  <button className="finishBtn">terminar compra</button>
                </Link>
              ) : (
                <ItemCount
                  product={data}
                  stock={stock}
                  updateAmount={updateAmount}
                />
              )}
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/store" className="return_btn">
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
