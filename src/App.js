import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div>
        <ItemListContainer greeting="Hola mundial!" />
      </div>
    </div>
  );
}

export default App;
