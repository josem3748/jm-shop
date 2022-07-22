import Item from "../components/Item";
import "./styles/ItemList.css";

const ItemList = (props) => {
  return (
    <>
      {props.products.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          category={item.category}
          description={item.category}
          stars={item.stars}
          price={item.price}
        />
      ))}
    </>
  );
};

export default ItemList;
