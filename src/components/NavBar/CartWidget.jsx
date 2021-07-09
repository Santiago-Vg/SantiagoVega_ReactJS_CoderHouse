import React from "react";
import { Link } from "react-router-dom";

function cartWidget() {
  return (
    <div className="cart-icon">
      <Link to="/cart">
        <span id="warn"></span>
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </div>
  );
}

export default cartWidget;
