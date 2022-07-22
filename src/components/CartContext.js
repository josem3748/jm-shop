import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    let alreadyAddedProduct = cartList.findIndex(
      (x) => x.products.id === item.products.id
    );
    alreadyAddedProduct >= 0
      ? (cartList[alreadyAddedProduct].products.qty += item.products.qty)
      : setCartList([...cartList, item]);
  };

  const removeFromCart = (item) => {
    let productToRemove = cartList.find((x) => x.products.id === item);
    let arr = [...cartList];
    setCartList(
      arr.filter((x) => x.products.id !== productToRemove.products.id)
    );
  };

  const removeAll = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeFromCart, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
