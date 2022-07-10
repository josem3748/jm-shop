import ItemList from "../components/ItemList";
import "./styles/ItemListContainer.css";
import React, { useState, useEffect } from "react";
import CustomFetch from "../components/CustomFetch";
import Products from "../data/Products";

const ItemListContainer = (props) => {
  let [state, setState] = useState(
    <>
      <div className="row mt-5 mx-0">
        <div className="mt-5 d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );

  useEffect(() => {
    CustomFetch(2000)
      .then(() => {
        const aux = <ItemList products={Products} />;
        setState(aux);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center">{props.greeting}</h1>
        {state}
      </div>
    </div>
  );
};

export default ItemListContainer;
