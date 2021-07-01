// REACT COMPONENTS
import React from "react";
// COMPONENTS
import Navbar from "../../components/NavBar/NavBar";
import ItemDetailContainer from "../../components/Container/DetailView/ItemDetailContainer";
import Footer from "../../components/Footer/Footer";

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <ItemDetailContainer />
      <Footer copyright="Todos los derechos reservados." />
    </div>
  );
};

export default ProductDetail;
