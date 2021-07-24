// REACT COMPONENTS
import React, { useContext, useEffect } from "react";
// COMPONENTS
import ItemDetailContainer from "../../components/Container/DetailView/ItemDetailContainer";
import { CartContext } from "../../context/CartContext";
import ModalComponent from "../../components/Checkout/ModalComponent/ModalComponent";

const ProductDetail = () => {
  const { setIsInStore, openModal, qtyModal } = useContext(CartContext);

  useEffect(() => {
    setIsInStore(true);
  }, [setIsInStore]);

  return (
    <div>
      <ItemDetailContainer />
      {openModal ? <ModalComponent amount={qtyModal} /> : ""}
    </div>
  );
};

export default ProductDetail;
