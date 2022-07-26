import React, { useContext } from "react";
import { CartContext } from "./CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./styles/CartWidget.css";

const CartWidget = () => {
  const carrito = useContext(CartContext);

  let burbuja = 0;

  console.log(carrito);

  carrito.cartList.forEach((element) => {
    burbuja += element.products.qty;
  });

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faCartShopping} color="gray" />
      <div className="qty-display">{burbuja}</div>
    </div>
  );
};

export default CartWidget;
