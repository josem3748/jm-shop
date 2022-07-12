import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

function ItemCount(props) {
  let inicial;

  props.initial > props.stock
    ? (inicial = props.stock)
    : (inicial = props.initial);

  let [qty, setQty] = useState(inicial);

  const OnAdd = () => {
    if (qty < props.stock) {
      const aux = qty + 1;
      setQty(aux);
    }
  };

  const OnRemove = () => {
    if (qty >= 2) {
      const aux = qty - 1;
      setQty(aux);
    }
  };

  const OnAddToCart = () => {
    alert(`We added ${qty} units of ${props.name} to the cart.`);
  };

  return (
    <>
      <div className="d-flex justify-content-between install mt-3">
        <button onClick={OnRemove} className="text-primary">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <span>I want {qty} of these!</span>
        <button onClick={OnAdd} className="text-primary">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div>
        <button onClick={OnAddToCart} type="button" className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ItemCount;
