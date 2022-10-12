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
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {

  const { handleClick } = useContext(CartContext)




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
                  </Link>
                  <div>
                    <button onClick={handleClick} className=" add-to-cart-btn" id={product.id}>Add to Cart <FontAwesomeIcon
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
                    <hr className="line" />
                    <p>{product.description} <Link to={`/products/${product.id}`}>see more</Link> </p>
                    <hr className="line" />

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
