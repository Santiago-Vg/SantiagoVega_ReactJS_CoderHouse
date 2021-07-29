// REACT
import React, { useState, useContext } from "react";
// CONTEXT
import { SiteContext } from "../../../context/SiteContext";
// CSS
import "./ItemCount.css";

const ItemCount = ({ product, stock, updateAmount }) => {
  const userProduct = JSON.parse(localStorage.getItem("userCart")).find(
    (item) => item.id === product.id
  );

  const [productStock, setProductStock] = useState(
    userProduct ? stock - userProduct.amount : stock
  );

  const { addToCart, handleModal } = useContext(SiteContext);

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (productStock >= 2) {
      setCount(count + 1);
      setProductStock(productStock - 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setProductStock(productStock + 1);
    }
  };

  const onAdd = () => {
    addToCart(product, count);
    updateAmount(count);
    setCount(0);
    handleModal(count);
  };

  return (
    <div className="d-flex">
      <div className="btn_amount d-flex">
        <button className="btn_rem" onClick={handleDecrement}>
          -
        </button>
        <div className="amount">{count}</div>
        <button className="btn_add" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div>
        <button className="btn_addToCart" onClick={onAdd}>
          añadir
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
