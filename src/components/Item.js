import ItemCount from "./ItemCount";
import React from "react";
import "./styles/Item.css";
import StartsRating from "./StartsRating";

function Item(props) {
  return (
    <div className="col-md-4">
      <div className="card p-3">
        <div className="d-flex flex-row mb-3">
          <img className="mx-2" src={props.img} alt={props.name} width="70" />
          <div className="d-flex flex-column ml-2">
            <span>{props.name}</span>
            <span className="text-black-50">{props.category}</span>
            <span className="ratings">
              <StartsRating qestrellas={props.stars} />
            </span>
          </div>
        </div>
        <h6>{props.description}</h6>
        <ItemCount
          initial={props.initial}
          stock={props.stock}
          name={props.name}
        />
      </div>
    </div>
  );
}

export default Item;
