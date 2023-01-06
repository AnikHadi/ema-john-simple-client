import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartData from "../../hooks/CartData";
import { deleteShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart, handelAddToCart } = CartData();

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / size);
        setPageCount(pages);
      });
  }, [size]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="shop">
        <div className="products-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              handelAddToCart={handelAddToCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} clearCart={clearCart}>
            {/* <Link to="/order"> */}
            <button
              onClick={() => navigate("/order")}
              className="order-btn-link"
            >
              Review Order{" "}
              <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            </button>
            {/* </Link> */}
          </Cart>
        </div>
      </div>
      <div id="pagination" className="container mt-5 ">
        <p className="text-center">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number}
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
          <select
            className="select-value"
            defaultValue={"10"}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value={"5"}>5</option>
            <option value={"10"}>10</option>
            <option value={"15"}>15</option>
            <option value={"20"}>20</option>
          </select>
        </p>
      </div>
    </div>
  );
};

export default Shop;
