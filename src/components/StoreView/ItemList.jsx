// REACT
import React, { useContext } from "react";
// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";
// CONTEXT
import { SiteContext } from "../../context/SiteContext";
// COMPONENTS
import Item from "./Item/Item";

const ItemList = ({ allProducts }) => {
  const products = allProducts;
  const { category } = useParams();
  const { searchImput } = useContext(SiteContext);

  const clasifiedProds = category
    ? products.filter((items) => items.category === category)
    : products;

  const filteredProds = clasifiedProds.filter((items) => {
    if (searchImput === "") {
      return items;
    } else if (
      items.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(searchImput.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    ) {
      return items;
    } else {
      return "";
    }
  });

  return filteredProds.length === 0 ? (
    category ? (
      <div className="searchMsg">
        <i className="fas fa-times-circle"></i>
        Ups... Producto no encontrado en esta categoria.
      </div>
    ) : (
      <div className="searchMsg">
        <i className="fas fa-times-circle"></i>
        Ups... Producto no encontrado la tienda.
      </div>
    )
  ) : (
    filteredProds.map((items) => {
      return <Item data={items} key={items.id} />;
    })
  );
};

export default ItemList;
