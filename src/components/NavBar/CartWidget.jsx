// REACT
import React, { useContext } from "react";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";
// CONTEXT
import { SiteContext } from "../../context/SiteContext";

const CartWidget = () => {
  const { cartAmount } = useContext(SiteContext);
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
