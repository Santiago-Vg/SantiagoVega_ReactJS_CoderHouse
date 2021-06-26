import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer() {
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
    }, 2500);
  }, []);
  return (
    <div className="item-list-container row px-0 mx-0 my-5">
      <ItemList allProducts={products} />
    </div>
  );
}

export default ItemListContainer;
