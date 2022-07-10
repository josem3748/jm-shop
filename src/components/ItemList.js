import Item from "../components/Item";

const ItemList = (props) => {
  return (
    <>
      {props.products.map((item, index) => (
        <Item
          key={index}
          img={item.img}
          name={item.name}
          category={item.category}
          description={item.category}
          stars={item.stars}
          initial={item.initial}
          stock={item.stock}
        />
      ))}
    </>
  );
};

export default ItemList;
