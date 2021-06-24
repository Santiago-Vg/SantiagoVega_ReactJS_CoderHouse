import React, { useState, useEffect } from "react";

function ItemList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("api.json").then(async (response) => {
        try {
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.log("Error!");
          console.error(error);
        }
      });
    }, 3000);
  }, []);
  return products.map((items) => {
    return (
      <div
        className="card mx-2 my-2 d-flex justify-content-center"
        key={items.id}
      >
        <img
          src={items.thumbnailUrl}
          className="img-fluid align-self-center"
          alt={items.title}
        ></img>
        <div className="d-flex">
          <div className="bar"></div>
          <div className="card-body text-left ml-1">
            <h5 className="card-title">{items.title}</h5>
            <p className="desc">{items.description}</p>
            <div className="buy d-flex align-items-center">
              <a href="#" className="btn">
                comprar.
              </a>
              <p className="card-text">{items.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default ItemList;
