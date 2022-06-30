import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center">{props.greeting}</h1>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="d-flex flex-row mb-3">
              <img
                className="mx-2"
                src="https://i.imgur.com/ccMhxvC.png"
                width="70"
              />
              <div className="d-flex flex-column ml-2">
                <span>Stripe</span>
                <span className="text-black-50">Payment Services</span>
                <span className="ratings">
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                </span>
              </div>
            </div>
            <h6>
              Get more context on your users with stripe data inside our
              platform.
            </h6>
            <div className="d-flex justify-content-between install mt-3">
              <span>Installed 172 times</span>
              <span className="text-primary">
                View&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="d-flex flex-row mb-3">
              <img
                className="mx-2"
                src="https://i.imgur.com/IpKQiNu.png"
                width="70"
              />
              <div className="d-flex flex-column ml-2">
                <span>Mailchimp</span>
                <span className="text-black-50">Project Management</span>
                <span className="ratings">
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                </span>
              </div>
            </div>
            <h6>
              Capture and sync subscribers from your mailchimp platform to ours
              with ease.
            </h6>
            <div className="d-flex justify-content-between install mt-3">
              <span>Installed 1234 times</span>
              <span className="text-primary">
                View&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="d-flex flex-row mb-3">
              <img
                className="mx-2"
                src="https://i.imgur.com/42SqVZd.png"
                width="70"
              />
              <div className="d-flex flex-column ml-2">
                <span>Dropbox</span>
                <span className="text-black-50">File Management</span>
                <span className="ratings">
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                </span>
              </div>
            </div>
            <h6>
              Use dropbox to sync your photos to our platform and share it with
              others.
            </h6>
            <div className="d-flex justify-content-between install mt-3">
              <span>Installed 1234 times</span>
              <span className="text-primary">
                View&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="d-flex flex-row mb-3">
              <img
                className="mx-2"
                src="https://i.imgur.com/lXEUCY8.png"
                width="70"
              />
              <div className="d-flex flex-column ml-2">
                <span>Shopify</span>
                <span className="text-black-50">Ecommerce</span>
                <span className="ratings">
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                </span>
              </div>
            </div>
            <h6>
              Sell you items with ease with having any website with our free
              platform
            </h6>
            <div className="d-flex justify-content-between install mt-3">
              <span>Installed 1234 times</span>
              <span className="text-primary">
                View&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="d-flex flex-row mb-3">
              <img
                className="mx-2"
                src="https://i.imgur.com/S2In5pz.png"
                width="70"
              />
              <div className="d-flex flex-column ml-2">
                <span>Atlassian</span>
                <span className="text-black-50">Project management</span>
                <span className="ratings">
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                </span>
              </div>
            </div>
            <h6>
              Developing products for developers,project managers and
              architects.
            </h6>
            <div className="d-flex justify-content-between install mt-3">
              <span>Installed 345 times</span>
              <span className="text-primary">
                View&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="d-flex flex-row mb-3">
              <img
                className="mx-2"
                src="https://i.imgur.com/S5oK3Oe.png"
                width="70"
              />
              <div className="d-flex flex-column ml-2">
                <span>Salesforce</span>
                <span className="text-black-50">Project management</span>
                <span className="ratings">
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                  <FontAwesomeIcon icon={faStar} color="green" />
                </span>
              </div>
            </div>
            <h6>
              Developing products for developers,project managers and
              architects.
            </h6>
            <div className="d-flex justify-content-between install mt-3">
              <span>Installed 345 times</span>
              <span className="text-primary">
                View&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
