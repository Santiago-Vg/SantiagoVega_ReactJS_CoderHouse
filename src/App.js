// REACT
import React from "react";
// CSS
import "./App.css";
// PAGES
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/Detail/ProductDetail";
import Category from "./components/Categorys/Category";
import Message404 from "./components/Message-404/message404";
import Store from "./pages/Store/Store";
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
// CONTEXT
import { SiteProvider } from "./context/SiteContext";

const App = () => {
  return (
    <SiteProvider>
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
    </SiteProvider>
  );
};

export default App;
