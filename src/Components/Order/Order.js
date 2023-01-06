import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import CartData from "../../hooks/CartData";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderDetails from "../OrderDetails/OrderDetails";
import "./Order.css";

const Order = () => {
  const { cart, setCart } = CartData();
  const itemRemove = (id) => {
    removeFromDb(id);
    const exists = cart.filter((p) => p._id !== id);
    setCart(exists);
  };

  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  const navigate = useNavigate();

  return (
    <div className="order-container">
      <div>
        {cart.map((p) => (
          <OrderDetails
            product={p}
            itemRemove={itemRemove}
            key={p._id}
          ></OrderDetails>
        ))}
      </div>
      <div>
        <div className="cart-container order-section-cart">
          <Cart cart={cart} clearCart={clearCart}>
            {/* <Link to="/manage"> */}
            <button
              onClick={() => navigate("/manage")}
              className="order-btn-link"
            >
              Proceed Checkout <FontAwesomeIcon icon={faCreditCard} />{" "}
            </button>
            {/* </Link> */}
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
