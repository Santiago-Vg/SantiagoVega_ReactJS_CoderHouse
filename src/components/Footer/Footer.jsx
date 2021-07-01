import React from "react";
import "./Footer.css";

function footer({ copyright }) {
  return (
    <div className="footer">
      <p>©</p>
      <div className="footer_logo">buncits.</div>
      <span>//</span>
      <p>{copyright}</p>
    </div>
  );
}

export default footer;
