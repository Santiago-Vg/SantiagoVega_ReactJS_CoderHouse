// REACT COMPONENTS
import React from "react";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// COMPONENTS
import ItemCount from "../ItemCount/ItemCount";
// CSS
import "./Item.css";
const Item = ({ data }) => {
  let content = data;

  return (
    <Link to={`/${data.category}/${data.id}`} key={content.id} className="link">
      <div className="card mx-2 my-2 d-flex justify-content-center">
        <img
          id={content.id}
          src={content.thumbnailUrl}
          className="img-fluid align-self-center"
          alt={content.title}
        ></img>
        <div className="d-flex">
          <div className="bar"></div>
          <div className="card-body text-left ml-1">
            <h5 className="card-title">{content.title}</h5>
            <p className="desc">{content.description}</p>
            <p className="card-text">{content.price}</p>
            <div className="buy d-flex align-items-center">
              <ItemCount stock={content.stock} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
