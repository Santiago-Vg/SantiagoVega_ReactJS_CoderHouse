// REACT COMPONENTS
import React from "react";
// COMPONENTS
import Navbar from "../../components/NavBar/NavBar";
import ItemListContainer from "../../components/Container/StoreView/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer view="store" />
      <Footer copyright="Todos los derechos reservados." />
    </div>
  );
};

export default Home;
