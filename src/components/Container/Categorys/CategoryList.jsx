// REACT COMPONENTS
import React from "react";
// COMPONENTS
import Item from "../StoreView/Item/Item";
import { useParams } from "react-router-dom";

const ItemList = ({ allProducts }) => {
  let products = allProducts;
  let prodCategory = useParams().category;
  console.log(useParams());
  return products
    .filter((items) => items.category === prodCategory)
    .map((items) => {
      return <Item data={items} key={items.id} />;
    });
};

export default ItemList;
