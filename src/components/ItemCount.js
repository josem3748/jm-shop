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
      return setQty((qty += 1));
    }
  };
  const OnRemove = () => {
    if (qty >= 2) {
      return setQty((qty -= 1));
    }
  };
  return (
    <>
      <button onClick={OnRemove} className="text-primary">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <span>I want {qty} of these!</span>
      <button onClick={OnAdd} className="text-primary">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </>
  );
}

export default ItemCount;
