import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const pd of cart) {
    quantity = quantity + pd.quantity;
    price = price + pd.price * pd.quantity;
    shipping = shipping + pd.shipping;
  }

  const tax = +(price * 0.1).toFixed(2);
  const grandTotal = price + shipping + tax;
  return (
    <div className="cart">
      <div className="cart-details">
        <h1>Order Summary</h1>
        <p>
          <strong>Selected Items: {quantity}</strong>
        </p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h4>Grand Total: ${grandTotal}</h4>
      </div>
      <div className="cart-btn-order">
        <button className="cart-btn-order-clear" onClick={clearCart}>
          Clear Cart{" "}
          <FontAwesomeIcon className="arrow-icon" icon={faTrashAlt} />
        </button>
        <br />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Cart;
