import React, { useContext } from "react";
import { CartContext } from "./CartContext";
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
} from "./styledComponents";

const Cart = () => {
  const carrito = useContext(CartContext);

  const OnRemoveFromCart = (index, cantidad, name) => {
    alert(`We removed ${cantidad} units of ${name} from the cart.`);
    carrito.removeFromCart(index);
  };

  const OnRemoveAll = (index, cantidad, name) => {
    alert(`All products were removed from the cart.`);
    carrito.removeAll();
  };

  console.log(carrito.cartList);
  return (
    <>
      <WrapperCart>
        <TitleCart>CART</TitleCart>
        {carrito.cartList.length > 0 && (
          <Button href="#" onClick={OnRemoveAll}>
            Remove All
          </Button>
        )}
        <ContentCart>
          {carrito.cartList.length > 0 ? (
            carrito.cartList.map((item, index) => (
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
            ))
          ) : (
            <span className="text-center">Your cart is empty</span>
          )}
        </ContentCart>
      </WrapperCart>
    </>
  );
};

export default Cart;
