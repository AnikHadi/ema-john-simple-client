import React from 'react';
import './Products.css';

const Product = ({product, handelAddToCart}) => {
    const {name, price, ratings, seller, img} = product;
    return (
        <div className='products'>
            <div className='products-details'>
                <img src={img} alt="" />
                <div>
                    <h6>{name}</h6>
                    <p>Price: ${price}</p>
                    <small className='small-details'>
                        <p>Manufacture: {seller}</p>
                        <p>Rating: {ratings}</p>
                    </small>
                </div>
            </div>
            <button onClick={() => handelAddToCart(product)} className='cart-btn'><p>Add to Cart</p></button>
        </div>
    );
};

export default Product;