import ItemList from "../components/ItemList";
import "./styles/ItemListContainer.css";
import Items from "../components/Item";
import React, { useState, useEffect } from "react";
import customFetch from "../components/customFetch";

const ItemListContainer = (props) => {
  let [arr, setArr] = useState([]);

  useEffect(() => {
    customFetch(2000)
      .then(() =>
        setArr(
          Items.map((item, index) => (
            <ItemList
              key={index}
              img={item.img}
              name={item.name}
              category={item.category}
              description={item.category}
              stars={item.stars}
              initial={item.initial}
              stock={item.stock}
            />
          ))
        )
      )
      .catch((err) => alert(err));
  }, []);
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center">{props.greeting}</h1>
        {arr}
      </div>
    </div>
  );
};

export default ItemListContainer;
