import React from 'react';
import {Carousel} from 'react-bootstrap';
import "./Home.css";
import Product from './Product.js';



function Home() {
    return (
        <div className="home">
                <div className="home__container"> 
                <img className="home__image"
                        
                        src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Evergreen_Shared/RebrandAssets/GW_1500x600_Apex_Roblox_LoL._CB408348441_.jpg"
                        alt=""
                        />

                {/* <Carousel className="carousel__image" >        
                        <Carousel.Item>
                        <img className="home__image"
                        
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                        alt=""
                        />
                        
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="home__image"
                        
                        src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Evergreen_Shared/RebrandAssets/GW_1500x600_Apex_Roblox_LoL._CB408348441_.jpg"
                        alt=""
                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="home__image"
                        
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/WeeklyBuild/US-EN_080820_Woodstock_ACQ_GW_Hero_D_1500x600_CV1._CB406589956_.jpg"
                        alt=""
                        />
                    </Carousel.Item>

                    </Carousel> */}
                

                

                <div className="home__row">
                   <Product title="Samsung Galaxy Watch Active2 (44mm, GPS, Bluetooth), Aqua Black (US Version)" price="249.99" rating={4} image="https://m.media-amazon.com/images/I/51G8gR4wGFL._AC_UY327_FMwebp_QL65_.jpg"/>
                   <Product title="Apple iPhone 11, 128GB, Black - Fully Unlocked (Renewed)" price={599.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/41v8zEyBX2L._AC_.jpg"/>
                    
                    
                </div>

                <div className="home__row">
                <Product title="Hathaway Maverick 7-foot Pool and Table Tennis Multi Game with Red Felt and Blue Table Tennis Surface" price={739.99} rating={2} image="https://images-na.ssl-images-amazon.com/images/I/71CfgIW0dzL._AC_SL1500_.jpg"/>
                   <Product title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={89.49} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SL1001_.jpg"/>
                   <Product title="Champion Power Equipment 100165 9375/7500-Watt Dual Fuel Portable Generator with Electric Start" price="1029.99" rating={3} image="https://images-na.ssl-images-amazon.com/images/I/81aZdd9FwZL._AC_SL1500_.jpg"/>

                </div>

                <div className="home__row">
                <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={899.49} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"/>
                   
                </div>
                
                </div>
               

        </div>
    );
}

export default Home;
