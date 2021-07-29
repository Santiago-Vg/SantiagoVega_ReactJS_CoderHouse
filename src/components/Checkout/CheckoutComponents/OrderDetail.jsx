// REACT
import React, { useContext } from "react";
// CONTEXT
import { SiteContext } from "../../../context/SiteContext";

const OrderDetail = () => {
  const { cart, cartAmount, cartTotal } = useContext(SiteContext);
  return (
    <div className="orderContainer p-4 mb-5">
      <div>
        <h2 className="mb-5 mt-2 text-center">Detalle de tu Orden</h2>
        {cart.map((item) => {
          return (
            <div
              className="d-flex justify-content-center flex-wrap mb-1"
              key={item.id}
            >
              <p className="cartInfo col-md-4 col-12 px-0">
                <strong>• Producto:</strong> {item.title}
              </p>
              <p className="cartInfo col-md-2 col-12 px-0">
                <strong>Cantidad:</strong> {item.amount}
              </p>
              <p className="cartInfo col-md-3 col-12 px-0">
                <strong>Precio: </strong> $ {item.price}
              </p>
              <p className="cartInfo col-md-2 col-12 px-0">
                <strong> Total: ${item.price * item.amount}</strong>
              </p>
            </div>
          );
        })}
        <div className="d-flex justify-content-start text-center mt-3">
          <p className="cartInfo orderFinal col-12 px-0 py-2">
            Cantidad de Productos: {cartAmount} <span className="px-3">-</span>{" "}
            Total: ${cartTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
