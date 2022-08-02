import React, { useContext } from "react";
import {
  collection,
  serverTimestamp,
  doc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import {
  WrapperCart,
  TitleCart,
  ContentCart,
  Product,
  ProductDetail,
  ImageCart,
  Details,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Button,
  Line,
} from "./styledComponents";

const Cart = () => {
  const carrito = useContext(CartContext);

  const OnRemoveFromCart = (index, cantidad, name) => {
    alert(`We removed ${cantidad} units of ${name} from the cart.`);
    carrito.removeFromCart(index);
  };

  const OnRemoveAll = () => {
    alert(`All products were removed from the cart.`);
    carrito.removeAll();
  };

  let qtySubtotal = 0;
  let subtotal = 0;

  carrito.cartList.forEach((element) => {
    qtySubtotal += element.products.qty;
    subtotal += element.products.qty * element.products.price;
  });

  let discount = 0.1;
  let taxes = 0.21;

  let discountTotal = Math.round(subtotal * discount);
  let taxesTotal = Math.round(subtotal * (1 - discount) * taxes);
  let total = subtotal - discountTotal + taxesTotal;

  const createOrder = () => {
    let itemsForDB = carrito.cartList.map((item) => ({
      id: item.products.id,
      title: item.products.name,
      price: item.products.price,
      qty: item.products.qty,
    }));
    let order = {
      buyer: {
        email: "leo@messi.com",
        name: "Leo Messi",
        phone: "9273489342",
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: { total },
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((res) => alert("Your order id is " + res.id))
      .catch((err) => alert(err));

    carrito.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.products.id);
      await updateDoc(itemRef, {
        stock: increment(-item.products.qty),
      });
    });

    carrito.removeAll();
  };

  return (
    <>
      <WrapperCart>
        <TitleCart>CART</TitleCart>
        {carrito.cartList.length > 0 && (
          <>
            <Link className="btn btn-primary w-25 m-0" to={"/"}>
              Buy something
            </Link>
            <Button
              className="btn btn-danger m-0"
              href="#"
              onClick={OnRemoveAll}
            >
              Remove all
            </Button>
          </>
        )}
        <ContentCart>
          {carrito.cartList.length > 0 ? (
            <>
              {carrito.cartList.map((item, index) => (
                <Product key={index}>
                  <ProductDetail>
                    <ImageCart src={item.products.img} />
                    <Details>
                      <span>
                        <b>Product:</b> {item.products.name}
                      </span>
                    </Details>
                    <Button
                      href="#"
                      onClick={() =>
                        OnRemoveFromCart(
                          item.products.id,
                          item.products.qty,
                          item.products.name
                        )
                      }
                      primary
                    >
                      Remove
                    </Button>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <ProductAmount>{item.products.qty} items</ProductAmount>
                    </ProductAmountContainer>
                    <ProductPrice>$ {item.products.price} each</ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
              <Line />
              <Product>
                <ProductDetail>
                  <Details>
                    <span>
                      <b>SUMMARY:</b>
                    </span>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <ProductAmount>{qtySubtotal} items</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>$ {subtotal} subtotal</ProductPrice>
                  <ProductPrice>($ {discountTotal} discount)</ProductPrice>
                  <ProductPrice>$ {taxesTotal} taxes</ProductPrice>
                  <ProductPrice>---------------------</ProductPrice>
                  <ProductPrice>$ {total} total</ProductPrice>
                </PriceDetail>
              </Product>
              <Line />
              <Button onClick={createOrder} className="btn btn-success w-100">
                Payment
              </Button>
            </>
          ) : (
            <>
              <span className="text-center">Your cart is empty</span>
              <Link className="btn btn-primary w-25 mx-auto" to={"/"}>
                Buy something
              </Link>
            </>
          )}
        </ContentCart>
      </WrapperCart>
    </>
  );
};

export default Cart;
