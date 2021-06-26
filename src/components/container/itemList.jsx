import React, { useState, useEffect } from "react";
import Item from "./Item";

function ItemList({ allProducts }) {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts((products = allProducts));
  });
  return products.map((items) => {
    return <Item data={items} />;
  });
}

export default ItemList;
