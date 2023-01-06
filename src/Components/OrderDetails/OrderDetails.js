import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./OrderDetails.css";

const OrderDetails = ({ product, itemRemove }) => {
  const { img, name, price, shipping, _id, quantity } = product;

  return (
    <div className="order-section-cart-container">
      <div className="order-section-img">
        <img src={img} alt="" />
      </div>
      <div className="order-section-details">
        <div>
          <p>{name < 20 ? name.slice(0, 20) : name}</p>
          <small className="order-section-details-small-p">
            <p>
              Price: <span className="price-color">${price}</span>
            </p>
            <p>
              Shipping Charge: <span className="price-color">${shipping}</span>
            </p>
            <p>
              Quantity: <span className="price-color">{quantity}</span>
            </p>
          </small>
        </div>
        <div className="order-section-details-btn">
          <button onClick={() => itemRemove(_id)}>
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
