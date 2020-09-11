import React, { useState } from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({title,price,rating,image,original}) {

    const [{cart},dispatch]=useStateValue(); 

    console.log("cart is this",cart);

    const addToCart=()=>{

        dispatch({
                type: 'ADD_TO_CART',
                title:{
                    id:1,
                    title:title,
                    image:image,
                    price:price,
                    rating:rating,
                },
        });    
    };



    return (
        <div className="product">
                    <div className="product__info">
                     <p>{title}</p>
                    <p className="product__price">
                    
                 <strong><p><s><small>$</small>{(price*1.2).toFixed(2)}</s></p>
                 <small>Special Offer at $</small>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                    </div>
                    </div>

                    <img src={image}/>

                    <button className="product__button" onClick={addToCart}>  Add to Cart</button>
            
            
        </div>
    );
}

export default Product;