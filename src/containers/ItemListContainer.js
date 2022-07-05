import ItemList from "../components/ItemList";
import "./styles/ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center">{props.greeting}</h1>
        <div className="col-md-4">
          <ItemList
            img="https://i.imgur.com/ccMhxvC.png"
            name="Stripe"
            category="Payment Services"
            description="Get more context on your users with stripe data inside our
              platform."
            stars={4}
            initial={1}
            stock={5}
          />
        </div>
        <div className="col-md-4">
          <ItemList
            img="https://i.imgur.com/IpKQiNu.png"
            name="Mailchimp"
            category="Project Management"
            description="Capture and sync subscribers from your mailchimp platform to ours
            with ease."
            stars={3}
            initial={1}
            stock={1}
          />
        </div>
        <div className="col-md-4">
          <ItemList
            img="https://i.imgur.com/42SqVZd.png"
            name="Dropbox"
            category="File Management"
            description="Use dropbox to sync your photos to our platform and share it with
            others."
            stars={4}
            initial={1}
            stock={2}
          />
        </div>
        <div className="col-md-4">
          <ItemList
            img="https://i.imgur.com/lXEUCY8.png"
            name="Shopify"
            category="Ecommerce"
            description="Sell you items with ease with having any website with our free
            platform."
            stars={2}
            initial={1}
            stock={3}
          />
        </div>
        <div className="col-md-4">
          <ItemList
            img="https://i.imgur.com/S2In5pz.png"
            name="Atlassian"
            category="Project management"
            description="Developing products for developers,project managers and
            architects."
            stars={5}
            initial={1}
            stock={4}
          />
        </div>
        <div className="col-md-4">
          <ItemList
            img="https://i.imgur.com/S5oK3Oe.png"
            name="Salesforce"
            category="Project management"
            description="Developing products for developers,project managers and
            architects."
            stars={1}
            initial={1}
            stock={0}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
