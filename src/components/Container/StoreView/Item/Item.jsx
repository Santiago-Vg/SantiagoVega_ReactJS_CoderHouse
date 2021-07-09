// REACT COMPONENTS
import React, { useState } from "react";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// COMPONENTS
import ItemCount from "../ItemCount/ItemCount";
// CSS
import "./Item.css";

const Item = ({ data }) => {
  let { id, thumbnailUrl, title, description, price, stock, category } = data;

  const [amount, setAmount] = useState(0);

  const updateAmount = (qty) => {
    setAmount(amount + qty);
  };

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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
