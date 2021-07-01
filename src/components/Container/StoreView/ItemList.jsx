// REACT COMPONENTS
import React from "react";
// COMPONENTS
import Item from "./Item/Item";

const ItemList = ({ allProducts }) => {
  let products = allProducts;

  return products.map((items) => {
    return <Item data={items} />;
  });
};

export default ItemList;
