// REACT COMPONENTS
import React, { useContext } from "react";
// COMPONENTS
import Item from "./Item/Item";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemList = ({ allProducts }) => {
  let products = allProducts;
  let { category } = useParams();

  const { searchImput } = useContext(CartContext);

  return category
    ? products
        .filter((items) => items.category === category)
        .filter((items) => {
          if (searchImput === "") {
            return items;
          } else if (
            items.title
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                searchImput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
              )
          ) {
            return items;
          } else {
            return "";
          }
        })
        .map((items) => {
          return <Item data={items} key={items.id} />;
        })
    : products
        .filter((items) => {
          if (searchImput === "") {
            return items;
          } else if (
            items.title
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(
                searchImput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
              )
          ) {
            return items;
          } else {
            return "";
          }
        })
        .map((items) => {
          return <Item data={items} key={items.id} />;
        });
};

export default ItemList;
