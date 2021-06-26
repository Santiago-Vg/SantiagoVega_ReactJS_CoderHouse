import React from "react";

function cartWidget() {
  return (
    <div className="cart-icon">
      <a href="#">
        <span id="warn"></span>
        <i className="fas fa-shopping-cart"></i>
      </a>
    </div>
  );
}

export default cartWidget;
