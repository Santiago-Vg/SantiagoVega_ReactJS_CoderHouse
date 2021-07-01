// CSS
import "./App.css";
// PAGES
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import Contacto from "./pages/Contacto/Contacto";
import ProductDetail from "./pages/Detail/ProductDetail";
import Category from "./components/Container/Categorys/Category";
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/:category/:id" component={ProductDetail} />
          <Route path="/:category" component={Category} />
        </Switch>
        <Footer copyright="Todos los derechos reservados." />
      </div>
    </Router>
  );
}

export default App;
