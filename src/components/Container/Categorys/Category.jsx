// REACT COMPONENTS
import React from "react";
// COMPONENTS
import ItemListContainer from "../StoreView/ItemListContainer/ItemListContainer";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const category = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer view="category" />
      <Footer />
    </div>
  );
};

export default category;
