// REACT COMPONENTS
import React, { useState } from "react";
// CSS
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
  const [productStock, setProductStock] = useState(stock);

  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (productStock >= 1) {
      setCount(count + 1);
      setProductStock(productStock - 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setProductStock(productStock + 1);
    }
  };

  const onAdd = () => {
    if (count >= 1) {
      alert(`Se añadieron ${count} productos al carrito.`);
      document.getElementById("warn").innerHTML = "!";
      setCount((count = 0));
    } else {
      alert(`Se tiene que agregar al menos un producto.`);
    }
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
          añadir.
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
