import React, { Fragment, useContext, useState } from "react";
import products from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartContext from "../context/CartContext";
import AddedContext from "../context/AddedContext";


import {
  faCartShopping,
  faSignIn,
  faCoffee,
  faStar,
  faStarHalf,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const { handleClick, cart, setCart } = useContext(CartContext);
  const { addedCart, changeButton, addedText, changeText, removeTheItem } =
    useContext(AddedContext);

  const buttons = {};
  

  return (
    <>
      <div className="product-grid">
        {products.map((product) => {
          const { id } = product;

          const handleObj = (e) => {
            handleClick(product);
            const id = e.target.id
            changeButton(id);
            changeText(id);
          
            if (addedText == "REMOVE") {
              const removeTheItem = (id) => {
                const newArr = cart.filter((elem) => elem.id != id)
               setCart(newArr)
              }
              removeTheItem(id)
            }
            
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
                    style={{
                      color: addedCart ? "black" : "white",
                      backgroundColor: addedCart ? "white" : "black",
                    }}
                    className=" add-to-cart-btn"
                    id={product.id}
                  >
                    {addedText}
                  </button>

                  <button className=" buy-now-btn" id={product.id}>
                    BUY NOW{" "}
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                  </button>
                </div>
                <div className="name-and-price">
                  <p className="product-name">{product.name}</p>

                  <p className="price">
                    <p className="old-price">
                      <s>${product.oldprice}</s>
                    </p>
                    ${product.price}
                    <sup>99</sup> <p className="qty">{product.qty} left</p>
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

      <h3 className="special-text">SPECIAL FLAVORS</h3>
      <div className="shine">
        <div className="special-main">
          <div className="special">
            <img
              src="https://cdn.shopify.com/s/files/1/1475/5488/products/CookiesNDreams-Front_1024x1024@2x.jpg?v=1569419317"
              alt=""
            />
            <div className="special-stars">
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
            </div>
            <Link className="review">14 reviews</Link>
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque
              reiciendis dolores, accusantium dolor qui impedit. Cum labore
              officia inventore.
            </p>
          </div>
          <div className="special">
            <img
              src="https://cdn.shopify.com/s/files/1/1475/5488/products/CookiesNDreams-Front_1024x1024@2x.jpg?v=1569419317"
              alt=""
            />
            <div className="special-stars">
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
            </div>
            <Link className="review">66 reviews</Link>
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque
              reiciendis dolores, accusantium dolor qui impedit. Cum labore
              officia inventore.
            </p>
          </div>
          <div className="special">
            <img
              src="https://cdn.shopify.com/s/files/1/1475/5488/products/CookiesNDreams-Front_1024x1024@2x.jpg?v=1569419317"
              alt=""
            />
            <div className="special-stars">
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="rating-special"
                icon={faStar}
              ></FontAwesomeIcon>
            </div>
            <Link className="review">19 reviews</Link>
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque
              reiciendis dolores, accusantium dolor qui impedit. Cum labore
              officia inventore.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="beside-image">
          <h2 className="best-seller-desc">This month's Best Seller</h2>
          <div className="circles">
            <div className="one-circ">Great Taste</div>
            <div className="one-circ">Fat Burner</div>
            <div className="one-circ">Low Calories</div>
            <div className="one-circ">Ready To Go</div>
            <div className="one-circ last">Smells Great</div>
            <div className="one-circ last">Do Enjoy!</div>
          </div>
        </div>

        <img
          className="coffee-image"
          src="https://cdn.shopify.com/s/files/1/1475/5488/products/CookiesNDreams-Front_1024x1024@2x.jpg?v=1569419317"
          alt=""
        />
      </div>
    </>
  );
};

export default Products;
