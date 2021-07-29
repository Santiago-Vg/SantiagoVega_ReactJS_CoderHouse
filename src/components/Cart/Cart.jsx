// REACT
import React, { useContext, useState, useEffect } from "react";
// REACT ROUTER DOM
import { useHistory } from "react-router-dom";
// CONTEXT
import { SiteContext } from "../../context/SiteContext";
// COMPONENTS
import Checkout from "../Checkout/Checkout";
// CSS
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    cartAmount,
    clearCart,
    remProduct,
    cartTotal,
    setIsInStore,
    setIsInHome,
  } = useContext(SiteContext);

  useEffect(() => {
    setIsInStore(false);
    setIsInHome(false);
  }, [setIsInStore, setIsInHome]);

  const history = useHistory();

  const [checkout, setCheckout] = useState(false);

  const cartAlert = () => {
    setCheckout(true);
  };

  const goBack = () => {
    history.push("/");
  };

  return (
    <div className="d-flex flex-column justify-content-around align-items-center cart m-5 py-5">
      <h1 className="pb-4">Carrito</h1>
      {!cart.length ? (
        <div className="emptyCart text-center d-flex flex-column justify-content-center align-items-center">
          <p>Tu carrito está vacío.</p>
          <span className="loadingMsg_Logo">buncits.</span>
          <button className="mt-5" onClick={goBack}>
            volver
          </button>
        </div>
      ) : !checkout ? (
        cart.map((item) => {
          return (
            <div
              className="d-flex align-items-center cartItem flex-wrap justify-content-center my-3 mx-4 col-11"
              key={item.id}
            >
              <img
                src={item.thumbnailUrl}
                alt=""
                className="col-md-3 col-12 pb-3"
              />
              <div className="row flex-column col-md-8 col-12 py-3">
                <div className="prodTitle d-flex justify-content-between">
                  <span>{item.title}</span>
                  <div className="btnContainer">
                    <button
                      className="mx-2"
                      onClick={remProduct}
                      value={item.id}
                    >
                      <i className="fas fa-times-circle"></i>
                    </button>
                  </div>
                </div>
                <p>{item.description}</p>
                <p>
                  Cantidad: <strong>{item.amount}</strong> - Precio:{" "}
                  <strong>$ {item.price}</strong>
                </p>
                <p className="prodTotal pb-4">
                  Total: $ {item.amount * item.price}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="d-flex align-items-center cartItem flex-wrap justify-content-center my-3 mx-4 col-11">
          <Checkout />
        </div>
      )}
      {!cart.length || checkout ? (
        ""
      ) : (
        <div className="col-11 px-0">
          <div className="cartItem cartTotal mt-3 text-center py-3 d-flex justify-content-center">
            <p>
              Productos en el carrtito: <strong>{cartAmount}</strong>
            </p>
            <p>
              Total:
              <strong>
                {" $ "}
                {cartTotal}
              </strong>
            </p>
          </div>
          <div className="d-flex cartButtons pt-2 justify-content-center">
            <button onClick={clearCart} className="mx-2 emptyBtn">
              Vaciar Carrito
            </button>
            <button onClick={cartAlert} className="mx-2 finishBtn">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
