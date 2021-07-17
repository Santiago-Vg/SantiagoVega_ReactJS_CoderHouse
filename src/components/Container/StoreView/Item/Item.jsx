// REACT COMPONENTS
import React from "react";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// CSS
import "./Item.css";

const Item = ({ data }) => {
  let { id, thumbnailUrl, title, description, price, category } = data;

  return (
    <Link to={`/${category}/${id}`} key={id} className="link">
      <div className="card mx-2 my-2 d-flex justify-content-center ">
        <img
          id={id}
          src={thumbnailUrl}
          className="img-fluid align-self-center"
          alt={title}
        ></img>
        <div className="d-flex">
          <div className="bar"></div>
          <div className="card-body text-left ml-1">
            <h5 className="card-title">{title}</h5>
            <p className="desc">{description}</p>
            <p className="card-text">{price}</p>
            <div
              className="buy d-flex align-items-center"
              onClick={(e) => e.preventDefault()}
            >
              <Link to={`/${category}/${id}`} key={id}>
                <button className="btn buyBtn">comprar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
