// REACT COMPONENTS
import React from "react";
// COMPONENTS
import Item from "./Item/Item";
import { useParams } from "react-router-dom";

const ItemList = ({ allProducts }) => {
  let products = allProducts;
  let { category } = useParams();

  return category
    ? products
        .filter((items) => items.category === category)
        .map((items) => {
          return <Item data={items} key={items.id} />;
        })
    : products.map((items) => {
        return <Item data={items} key={items.id} />;
      });
};

export default ItemList;
