/// REACT COMPONENTS
import React, { useState, useEffect } from "react";
// COMPONENTS
import ItemDetail from "./ItemDetail/ItemDetail";
// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  const { id, category } = useParams();
  useEffect(() => {
    setTimeout(() => {
      fetch("https://mocki.io/v1/189f9f70-9fbb-41f5-92a0-319105353673").then(
        async (response) => {
          try {
            const data = await response.json();
            const filtered = data.find(
              (item) => item.id === parseInt(id) && item.category === category
            );
            setProducts(filtered);
          } catch (error) {
            console.log("Error!");
            console.error(error);
          }
        }
      );
    }, 2500);
  }, [id, category]);
  return (
    <>
      <div className="item-list-container row px-0 mx-0 my-5">
        {!products ? (
          <div className="loadingMsg">
            <p>
              producto inexistente
              <br /> <span className="loadingMsg_Logo">buncits.</span>
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="loadingMsg">
            <p>
              cargando vista de detalle
              <br /> <span className="loadingMsg_Logo">buncits.</span>
            </p>
          </div>
        ) : (
          <ItemDetail data={products} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
