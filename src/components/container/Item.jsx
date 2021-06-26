import React, { useState, useEffect } from "react";
import ItemCount from "../itemCount";

function Item({ data }) {
  let [content, setProducts] = useState([]);

  useEffect(() => {
    setProducts((content = data));
  });

  return (
    <div
      className="card mx-2 my-2 d-flex justify-content-center"
      key={content.id}
    >
      <img
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
  );
}

export default Item;
