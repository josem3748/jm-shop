import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./components/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <div>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
