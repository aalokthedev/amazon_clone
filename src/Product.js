import React from 'react';
import './Product.css';


function Product({title,price,rating,image,original}) {
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

                    <button className="product__button"> Add to Cart</button>
            
            
        </div>
    );
}

export default Product;