import React, { useContext, useEffect } from "react";
import ItemListContainer from "../../components/Container/StoreView/ItemListContainer/ItemListContainer";
import { CartContext } from "../../context/CartContext";

const Store = () => {
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

export default Store;
