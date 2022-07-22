import styled from "styled-components";

//ItemCount
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

//Cart
const WrapperCart = styled.div`
  padding: 20px;
`;

const TitleCart = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  border-radius: 5px;
  margin: 40px 0;
  padding: 20px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImageCart = styled.img`
  width: auto;
  border-radius: 100px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Button = styled.a`
  ${(props) =>
    props.primary
      ? `
      background: gray;
      border-radius: 5px;
      height: 40px;
      margin: auto 0 auto auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `
      : `
  background: gray;
  border-radius: 5px;
  height: 40px;
  margin: auto 0 auto auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  text-align: center;
`}
`;

export {
  WrapperCart,
  TitleCart,
  ContentCart,
  Product,
  ProductDetail,
  ImageCart,
  Details,
  PriceDetail,
  ProductPrice,
  ProductAmountContainer,
  ProductAmount,
  Button,
};
