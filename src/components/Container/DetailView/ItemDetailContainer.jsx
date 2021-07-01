// REACT COMPONENTS
import React, { useState, useEffect } from "react";
// COMPONENTS
import ItemDetailMap from "./ItemDetailMap";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("../apiShort.json").then(async (response) => {
        try {
          const data = await response.json();
          const url = window.location.href.split("/");
          const filtered = data.filter((item) => item.id === parseInt(url[4]));
          setProducts(filtered);
        } catch (error) {
          console.log("Error!");
          console.error(error);
        }
      });
    }, 2500);
  }, []);
  return (
    <>
      <div className="item-list-container row px-0 mx-0 my-5">
        {products.length === 0 ? (
          <div className="loadingMsg">
            <p>
              cargando vista de detalle...
              <br /> <span className="loadingMsg_Logo">buncits.</span>
            </p>
          </div>
        ) : (
          ""
        )}
        <ItemDetailMap allProducts={products} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
