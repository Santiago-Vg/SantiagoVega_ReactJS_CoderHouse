// REACT
import React, { useContext, useState } from "react";
// REACT-ROUTER-DOM
import { useHistory } from "react-router-dom";
// CONTEXT
import { SiteContext } from "../../context/SiteContext";
// FIREBASE
import { db } from "../../Firebase";
// COMPONENTS
import OrderDetail from "./CheckoutComponents/OrderDetail";
// CSS
import "./Checkout.css";

const Checkout = () => {
  // STEP 1 - GET CONTEXT
  const { cart, cartTotal, clearCart } = useContext(SiteContext);

  const products = cart.map((item) => {
    return {
      id: item.id,
      producto: item.title,
      cantidad: item.amount,
      precio: item.price,
    };
  });

  // STEP 2 - GET ORDER DATA
  const defaultClient = {
    cliente: { nombre: "", telefono: "", email: "", direccion: "" },
  };

  const date = new Date().toLocaleString();
  const [client, setClient] = useState(defaultClient);
  const [order, setOrder] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setClient({ cliente: { ...client.cliente, [name]: value } });

    const thisOrder = { ...client, products, total: cartTotal, fecha: date };
    setOrder(thisOrder);
  };

  // STEP 3 - SEND ORDER & UPDATE FIREBASE STOCK
  const [orderGenerated, setOrderGenerated] = useState("");

  const sendOrder = async (data) => {
    const dataRef = db.collection("buncitsOrders").doc();
    setOrderGenerated(dataRef.id);
    await dataRef.set(data);
  };

  const updateFbStock = () => {
    cart.forEach((item) => {
      console.log(item.id);
      const firebaseProduct = db
        .collection("buncitsProducts")
        .doc(`${item.id}`);
      return firebaseProduct.update({
        stock: item.stock - item.amount,
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOrder(order);
    updateFbStock();
  };

  // STEP 4 - CLEAR CART - BACK TO HOMEPAGE
  const history = useHistory();
  const finishShopping = () => {
    history.push("/");
    clearCart();
  };

  return (
    <div className="container-fluid p-5">
      {orderGenerated ? (
        <div onClick={finishShopping} className="orderGenerated text-center">
          <p>¡Felicidades, Orden generada!</p>
          <h6>
            Identificador para Seguimiento: <strong>{orderGenerated}</strong>.
          </h6>
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
