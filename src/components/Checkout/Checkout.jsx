import React, { useContext, useState } from "react";
import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import { db } from "../../Firebase";
import { useHistory } from "react-router-dom";
import OrderDetail from "./CheckoutComponents/OrderDetail";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);

  const defaultClient = {
    cliente: { nombre: "", telefono: "", email: "", direccion: "" },
  };

  const date = new Date().toLocaleString();
  const [client, setClient] = useState(defaultClient);
  const [order, setOrder] = useState({});

  const products = cart.map((item) => {
    return {
      id: item.id,
      producto: item.title,
      cantidad: item.amount,
      precio: item.price,
    };
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setClient({ cliente: { ...client.cliente, [name]: value } });

    const thisOrder = { ...client, products, total: cartTotal, fecha: date };
    setOrder(thisOrder);
  };

  const [orderGenerated, setOrderGenerated] = useState("");

  const sendOrder = async (data) => {
    const dataRef = db.collection("buncitsOrders").doc();
    setOrderGenerated(dataRef.id);
    await dataRef.set(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOrder(order);
  };

  const history = useHistory();
  const finishShopping = () => {
    history.push("/");
    clearCart();
  };

  return (
    <div className="container-fluid p-5">
      {orderGenerated ? (
        <div onClick={finishShopping} className="orderGenerated">
          <p>
            ¡Felicidades! Orden generada con id{" "}
            <strong>{orderGenerated}</strong>.
          </p>
          <button> salir </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <OrderDetail />
          <div className="form-group mt-3">
            <label htmlFor="name">Nombre y Apellido</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={handleOnChange}
              name="nombre"
              value={client.nombre}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              onChange={handleOnChange}
              name="telefono"
              value={client.telefono}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={handleOnChange}
              name="email"
              value={client.email}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              className="form-control"
              id="address"
              onChange={handleOnChange}
              name="direccion"
              value={client.direccion}
              required
            />
          </div>
          <button type="submit" className="btn mt-3" onSubmit={handleSubmit}>
            Enviar Orden
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
