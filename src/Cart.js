import React from 'react';
import "./Cart.css";
import Subtotal from "./Subtotal";


function Cart() {
    return (
        <div className="checkout">
            <div className="checkout__left">

                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/pantry/storefront/2020/XCM_Manual_1226089_1183236_US_us_amazon_pantry_how_it_works_storefront_banner_3109161_1500x250_2X_es_US.jpg" alt=""/>

                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                </div>
                
                <div className="checkout__items">

                    


                </div>
                
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
            
            
        </div>
    );
}

export default Cart;