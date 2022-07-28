import ItemCount from "./ItemCount";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Item.css";
import StartsRating from "./StartsRating";

const ItemDetail = (props) => {
  const carrito = useContext(CartContext);
  let [qty, setQty] = useState(0);

  const OnAddToCart = (cantidad, name) => {
    alert(`We added ${cantidad} units of ${name} to the cart.`);
    setQty((qty = cantidad));
    let item = { ...props };
    item.products.qty = cantidad;
    carrito.addToCart(item);
  };

  return (
    <div className="col-md-8">
      <div className="card p-3">
        <div className="d-flex flex-row mb-3">
          <img
            className="mx-2"
            src={props.products.img}
            alt={props.products.name}
            width="70"
          />
          <div className="d-flex flex-column ml-2">
            <span>{props.products.name}</span>
            <span className="text-black-50">{props.products.category}</span>
            <span className="ratings">
              <StartsRating qestrellas={props.products.stars} />
            </span>
          </div>
        </div>
        <h6>{props.products.description}</h6>
        <p>{props.products.longDescription}</p>
        <span className="text-center lead">${props.products.price}</span>
        {{ qty }.qty === 0 ? (
          <ItemCount
            initial={props.products.initial}
            stock={props.products.stock}
            name={props.products.name}
            OnAddToCart={OnAddToCart}
          />
        ) : (
          <div>
            <button type="button" className="btn btn-primary">
              <Link to={"/"}>Buy more stuff</Link>
            </button>
            <button type="button" className="btn btn-secondary">
              <Link to={"/cart"}>Checkout</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
