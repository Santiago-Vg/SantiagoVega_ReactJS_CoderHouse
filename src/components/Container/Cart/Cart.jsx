// REACT
import React, { useContext } from "react";
// REACT ROUTER DOM
import { Redirect, useHistory } from "react-router-dom";
// COMPONENTS
import { CartContext } from "../../../context/CartContext";
// CSS
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const history = useHistory();
  const cartAlert = () => {
    alert("Gracias por tu Compra!");
    history.push("/");
  };
  if (!cart.length) return <Redirect to="/" />;
  console.log(cart);
  return (
    <div className="d-flex flex-column justify-content-around align-items-center cart m-5 py-5">
      <h1 className="pb-4">Carrito</h1>
      {cart.map((item) => {
        return (
          <div
            className="d-flex align-items-center cartItem flex-wrap justify-content-center my-3 mx-4"
            key={item.id}
          >
            <img
              src={item.thumbnailUrl}
              alt=""
              className="col-md-3 col-12 pb-3"
            />
            <div className="row flex-column col-md-6 col-12 py-3">
              <p className="prodTitle">{item.title}</p>
              <p>{item.description}</p>
              <p>
                Cantidad: {item.amount} - Precio: $ {item.price}
              </p>
              <p className="prodTotal pb-4">
                Total: $ {item.amount * item.price}
              </p>
            </div>
          </div>
        );
      })}
      <div className="d-flex cartButtons pt-4">
        <button onClick={clearCart} className="mx-2 emptyBtn">
          Vaciar Carrito
        </button>
        <button onClick={cartAlert} className="mx-2 finishBtn">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
