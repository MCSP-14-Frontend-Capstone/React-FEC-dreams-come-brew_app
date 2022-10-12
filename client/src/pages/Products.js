import React, { Fragment } from "react";
import products from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faSignIn,
  faCoffee,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  return (
    <>
      <h2>Princess-Grade Coffee</h2>

      <div className="products">
        {products.map((product) => {
          return (

            <div className="product-page-card">
              <article
                className="product-page-single"
                key={product.id}
                id={product.id}
              >
                  <h3 className="product-name">{product.name}</h3>
                <div className="df">
                  <Link className="single-link" to={`/products/${product.id}`}>
                  
                  <img className="item-image" src={product.image} alt="" />
                  
                  <span id="productTitle" class="a-size-large product-title-word-break">Princess Breakfast Blend, Light Roast Ground Coffee, 12 oz Bag       
                  </span>
                  </Link>
                  <div>
                  <button className="btn add-to-cart-btn">Add to Cart <FontAwesomeIcon
                        className="cart-icon"
                        icon={faCartShopping}
                      ></FontAwesomeIcon></button>
                    <p className="qty">Qty: {product.qty} +</p>
                      <FontAwesomeIcon
                        className="rating-icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="rating-icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="rating-icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="rating-icon"
                        icon={faStar}
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        className="rating-icon"
                        icon={faStarHalf}
                      ></FontAwesomeIcon>
                  
                    <div className="price-info">
                  </div>
                    <p className="price">${product.price} <p><sup>99</sup></p> </p>
                    <hr className="line"/>
                    <p>{product.description} <Link to={`/products/${product.id}`}>see more</Link> </p>
                    <hr className="line"/>
                    
                </div>
                
                
                </div>
              </article>
            </div>

         

          );
        })}
      </div>
    </>
  );
};

export default Products;
