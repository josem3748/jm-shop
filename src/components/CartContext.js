import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    const alreadyAddedProduct = cartList.findIndex(
      (x) => x.products.id === item.products.id
    );
    alreadyAddedProduct >= 0
      ? (cartList[alreadyAddedProduct].products.qty += item.products.qty)
      : setCartList([...cartList, item]);
  };

  const removeFromCart = (item) => {
    const productToRemove = cartList.find((x) => x.products.id === item);
    const arr = [...cartList];
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
