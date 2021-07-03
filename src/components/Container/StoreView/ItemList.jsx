// REACT COMPONENTS
import React from "react";
// COMPONENTS
import Item from "./Item/Item";
import { useParams } from "react-router-dom";

const ItemList = ({ allProducts }) => {
  let products = allProducts;
  let hasCategory = useParams().category;

  return hasCategory
    ? products
        .filter((items) => items.category === hasCategory)
        .map((items) => {
          return <Item data={items} key={items.id} />;
        })
    : products.map((items) => {
        return <Item data={items} key={items.id} />;
      });
};

export default ItemList;
