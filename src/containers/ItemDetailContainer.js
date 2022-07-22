import ItemDetail from "../components/ItemDetail";
import "./styles/ItemListContainer.css";
import React, { useState, useEffect } from "react";
import CustomFetch from "../components/CustomFetch";
import Products from "../data/Products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [state, setState] = useState(
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

  const { id } = useParams();

  useEffect(() => {
    CustomFetch(1000)
      .then(() => {
        const aux = (
          <ItemDetail
            products={Products.find((item) => item.id === parseInt(id))}
          />
        );
        setState(aux);
      })
      .catch((err) => alert(err));
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">{state}</div>
    </div>
  );
};

export default ItemDetailContainer;
