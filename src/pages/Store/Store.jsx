// REACT
import React, { useContext, useEffect } from "react";
// CONTEXT
import { SiteContext } from "../../context/SiteContext";
// COMPONENTS
import ItemListContainer from "../../components/StoreView/ItemListContainer/ItemListContainer";

const Store = () => {
  const { setIsInStore, setIsInHome } = useContext(SiteContext);

  useEffect(() => {
    setIsInStore(true);
    setIsInHome(false);
  }, [setIsInStore, setIsInHome]);

  return (
    <div>
      <ItemListContainer />
    </div>
  );
};

export default Store;
