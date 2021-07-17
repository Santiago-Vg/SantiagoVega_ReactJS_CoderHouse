// REACT
import React, { useContext } from "react";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// COMPONENTS
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartAmount } = useContext(CartContext);
  console.log(cartAmount);
  return cartAmount === "0" ? (
    ""
  ) : (
    <div className="cart-icon">
      <Link to="/cart">
        <i className="fas fa-shopping-cart">
          <span>{cartAmount}</span>
        </i>
      </Link>
    </div>
  );
};

export default CartWidget;
