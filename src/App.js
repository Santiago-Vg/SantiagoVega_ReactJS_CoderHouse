// CSS
import React from "react";

import "./App.css";
// PAGES
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/Detail/ProductDetail";
import Category from "./components/Container/Categorys/Category";
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Store from "./pages/Store/Store";
import Message404 from "./components/Message-404/message404";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Container/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/store" component={Store} />
            <Route path="/cart" component={Cart} />
            <Route path="/:category/:id" component={ProductDetail} />
            <Route path="/:category" component={Category} />
            <Route path="*" component={Message404} />
          </Switch>
          <Footer copyright="Todos los derechos reservados." />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
