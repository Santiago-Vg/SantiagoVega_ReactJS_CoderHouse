// REACT COMPONENTS
import React, { useState, useEffect, useContext } from "react";
// COMPONENTS
import ItemList from "../ItemList";
import { CartContext } from "../../../../context/CartContext";
// CSS
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://mocki.io/v1/189f9f70-9fbb-41f5-92a0-319105353673").then(
        async (response) => {
          try {
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.log("Error!");
            console.error(error);
          }
        }
      );
    }, 2500);
  }, []);
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="item-list-container row px-0 mx-0 my-5">
      {products.length === 0 ? (
        <div className="loadingMsg">
          <p>
            cargando productos...
            <br /> <span className="loadingMsg_Logo">buncits.</span>
          </p>
        </div>
      ) : (
        <ItemList allProducts={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
