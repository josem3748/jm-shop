import ItemList from "../components/ItemList";
import "./styles/ItemListContainer.css";
import swal from "sweetalert";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

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
    const firestoreFecth = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const dataFromFirestore = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return dataFromFirestore;
    };
    firestoreFecth()
      .then((res) => {
        let aux;
        id === undefined
          ? (aux = <ItemList products={res} />)
          : (aux = (
              <ItemList
                products={res.filter(
                  (item) => item.categoryId === parseInt(id)
                )}
              />
            ));
        setState(aux);
      })
      .catch((err) => swal(err));
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <h1 className="text-center">Welcome!!!</h1>
        {state}
      </div>
    </div>
  );
};

export default ItemListContainer;
