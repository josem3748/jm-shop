import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
// import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div>
        {/* <ItemListContainer greeting="Hola mundial!" /> */}
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
