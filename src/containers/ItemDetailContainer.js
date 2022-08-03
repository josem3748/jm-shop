import ItemDetail from "../components/ItemDetail";
import "./styles/ItemListContainer.css";
import swal from "sweetalert";
import React, { useState, useEffect } from "react";
import { db } from "../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
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
    const firestoreFecth = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      /*       docSnap.exists()
        ? console.log("Document data:", docSnap.data())
        : console.log("No such document!"); */

      const dataFromFirestore = {
        id: id,
        ...docSnap.data(),
      };

      return dataFromFirestore;
    };
    firestoreFecth()
      .then((res) => {
        const aux = <ItemDetail products={res} />;
        setState(aux);
      })
      .catch((err) => swal(err));
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">{state}</div>
    </div>
  );
};

export default ItemDetailContainer;
