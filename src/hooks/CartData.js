import { useEffect, useState } from "react";
import { addToDb, getStoredCard } from "../utilities/fakedb";

const CartData = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCard = getStoredCard();
    const savedCart = [];
    const keys = Object.keys(storedCard);
    fetch("http://localhost:5000/productsByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedCard) {
          const addedProduct = products.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);

  const handelAddToCart = (product) => {
    let newCart = [];
    const exists = cart?.find((pd) => pd.id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((pd) => pd.id !== product._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(product._id);
  };

  return { cart, setCart, handelAddToCart };
};

export default CartData;
