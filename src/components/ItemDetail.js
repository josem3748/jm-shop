import ItemCount from "./ItemCount";
import React from "react";
import "./styles/Item.css";
import StartsRating from "./StartsRating";

function ItemDetail(props) {
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
        <ItemCount
          initial={props.products.initial}
          stock={props.products.stock}
          name={props.products.name}
        />
      </div>
    </div>
  );
}

export default ItemDetail;
