import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import ItemCount from "./ItemCount";
import React from "react";
import "./styles/ItemList.css";

const estrellas = (qestrellas) => {
  let stars = [];
  for (let i = 1; i <= qestrellas; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} color="green" />);
  }
  return stars;
};

function ItemList(props) {
  return (
    <div className="card p-3">
      <div className="d-flex flex-row mb-3">
        <img className="mx-2" src={props.img} width="70" />
        <div className="d-flex flex-column ml-2">
          <span>{props.name}</span>
          <span className="text-black-50">{props.category}</span>
          <span className="ratings">{estrellas(props.stars)}</span>
        </div>
      </div>
      <h6>{props.description}</h6>
      <div className="d-flex justify-content-between install mt-3">
        <ItemCount initial={props.initial} stock={props.stock} />
      </div>
      <div>
        <button type="button" className="btn btn-primary">
          Add to cart
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-secondary">
          More info
        </button>
      </div>
    </div>
  );
}

export default ItemList;
