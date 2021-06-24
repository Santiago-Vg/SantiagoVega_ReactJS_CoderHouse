import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <Footer copyright="Todos los derechos reservados." />
    </div>
  );
}

export default App;
