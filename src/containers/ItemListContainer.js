import ItemList from "../components/ItemList";
import "./styles/ItemListContainer.css";
import Items from "../components/Item";

const ItemListContainer = (props) => {
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center">{props.greeting}</h1>
        {Items.map((item, index) => (
          <div className="col-md-4">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
