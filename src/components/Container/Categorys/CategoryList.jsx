// REACT COMPONENTS
import React from "react";
// COMPONENTS
import Item from "../StoreView/Item/Item";

const ItemList = ({ allProducts }) => {
  let products = allProducts;
  let prodCategory = window.location.href.split("/")[3];

  console.log(prodCategory);
  console.log(products);

  return products
    .filter((items) => items.category == prodCategory)
    .map((items) => {
      return <Item data={items} />;
    });
};

export default ItemList;
