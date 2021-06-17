import './App.css';
import Navbar from './components/NavBar'
import ItemListContainer from './components/container/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a la Tienda Online de CruxStudio"}/>
    </div>
  );
}

export default App;
