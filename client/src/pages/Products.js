import React, { Fragment, useContext } from "react";
import products from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartContext from "../context/CartContext";

import {
  faCartShopping,
  faSignIn,
  faCoffee,
  faStar,
  faStarHalf,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const { handleClick } = useContext(CartContext);

  return (
    <>
      <div className="product-grid">
        
        {products.map((product) => {
          
          const handleObj = () => {
            handleClick(product);
          };
          return (
            <article className="product-col" key={product.id} id={product.id}>
              
              <Link className="single-link" to={`/products/${product.target}`}>
                <img src={product.image} alt="" />
              </Link>
              <div className="below-image">
                <div className="btn-group-card">
                  <button
                    onClick={handleObj}
                    className=" add-to-cart-btn"
                    id={product.id}
                  >
                    ADD TO CART{" "}
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
 
                  </button>
                  
                  <button
                    onClick={handleObj}
                    className=" buy-now-btn"
                    id={product.id}
                  >
                    BUY NOW{" "}
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                  </button>
                </div>
                <div className="name-and-price">
                  <p className="product-name">{product.name}</p>

                  <p className="price">
                  <p className="old-price"><s>${product.oldprice}</s></p>
                    ${product.price}
                    <sup>99</sup>{" "}
                    <p className="qty">{product.qty} left</p>
                  </p>

                </div>
                <div className="stars">
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
                    className="rating-icon rating-icon-half"
                    icon={faStarHalf}
                  ></FontAwesomeIcon>
                </div>
              </div>


            </article>
          );
        })}
      </div>
    </>
  );
};

export default Products;
