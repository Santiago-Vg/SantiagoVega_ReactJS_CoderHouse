// REACT COMPONENTS
import React, { useContext, useEffect } from "react";
// COMPONENTS
import ItemListContainer from "../StoreView/ItemListContainer/ItemListContainer";
import { CartContext } from "../../../context/CartContext";

const Category = () => {
  const { setIsInStore } = useContext(CartContext);

  useEffect(() => {
    setIsInStore(true);
  }, [setIsInStore]);

  return (
    <div>
      <ItemListContainer />
    </div>
  );
};

export default Category;
