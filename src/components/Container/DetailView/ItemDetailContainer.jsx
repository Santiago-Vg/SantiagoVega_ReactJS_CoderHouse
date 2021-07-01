/// REACT COMPONENTS
import React, { useState, useEffect } from "react";
// COMPONENTS
import ItemDetailMap from "./ItemDetailMap";
// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    setTimeout(() => {
      fetch("https://mocki.io/v1/189f9f70-9fbb-41f5-92a0-319105353673").then(
        async (response) => {
          try {
            const data = await response.json();
            const filtered = data.filter(
              (item) => item.id === parseInt(params.id)
            );
            setProducts(filtered);
          } catch (error) {
            console.log("Error!");
            console.error(error);
          }
        }
      );
    }, 2500);
  }, [params.id]);
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
