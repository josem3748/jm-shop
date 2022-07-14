import ItemList from "../components/ItemList";
import "./styles/ItemListContainer.css";
import React, { useState, useEffect } from "react";
import CustomFetch from "../components/CustomFetch";
import Products from "../data/Products";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
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
    if (id === undefined) {
      CustomFetch(2000)
        .then(() => {
          const aux = <ItemList products={Products} />;
          setState(aux);
        })
        .catch((err) => alert(err));
    } else {
      CustomFetch(2000)
        .then(() => {
          const aux = (
            <ItemList
              products={Products.filter(
                (item) => item.categoryId === parseInt(id)
              )}
            />
          );
          setState(aux);
        })
        .catch((err) => alert(err));
    }
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <h1 className="text-center">Hola mundo!!!</h1>
        {state}
      </div>
    </div>
  );
};

export default ItemListContainer;
