// REACT COMPONENTS
import React from "react";
// COMPONENTS
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailMap = ({ allProducts }) => {
  let products = allProducts;

  return products.map((items) => {
    return <ItemDetail data={items} />;
  });
};

export default ItemDetailMap;
