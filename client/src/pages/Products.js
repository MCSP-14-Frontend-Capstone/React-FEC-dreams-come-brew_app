import React, { Fragment, useContext, useEffect, useState } from "react";
import axios from 'axios';
// import products from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartContext from "../context/CartContext";
import AddedContext from "../context/AddedContext";
import SearchBar from "../components/SearchBar";

import {
  faCartShopping,
  faSignIn,
  faCoffee,
  faStar,
  faStarHalf,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const { handleClick, cart, setCart, Addon, setProducts, products } = useContext(CartContext);
  const { addedText, changeText } =
    useContext(AddedContext);

  //API call to get products data
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('https://dreamcomebrewserver.onrender.com/products');
      setProducts(data)
    };
    getProducts()
  }, []);

  const buttons = {};


  return (
    <>
      <div className="product_search_container">
        <SearchBar />
      </div>
      <div className="product-grid">
        {products.map((product) => {
          const { id } = product;

          const handleObj = (e) => {
            const id = e.target.id;
            const found = cart.find((elem) => elem.product_id === product.product_id)
            if (found) {
              console.log(found)
              Addon(found)
            } else {
              // console.log('elese')
              handleClick(product);
            }
            changeText(id);
            // if (addedText == "REMOVE") {
            //   const removeTheItem = (id) => {
            //     const newArr = cart.filter((elem) => elem.id != id);
            //     setCart(newArr);
            //   };
            //   removeTheItem(id);
            // }
          };


          const checkOutObj = () => {
            handleClick(product)
          }

          return (

            <article className="product-col" key={product.product_id} id={product.product_id}>
              <Link className="single-link" to={`/products/${product.target}`}>
                <img src={product.image} alt="" />
              </Link>
              <div className="below-image">
                <div className="btn-group-card">
                  <button
                    onClick={handleObj}
                    className=" add-to-cart-btn"
                    id={product.product_id}
                  >
                    {addedText}
                  </button>

                  <Link to={'/cart'}>

                    <button className=" buy-now-btn" id={product.product_id} onClick={handleObj}>
                      BUY NOW{" "}
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </button>

                  </Link>
                </div>
                <div className="name-and-price">
                  <p className="product-name">{product.name}</p>

                  <div className="price">
                    <p className="old-price">
                      <s>${product.original_price}</s>
                    </p>
                    ${product.sale_price}
                    <sup>99</sup> <p className="qty">{product.qty} left</p>
                  </div>
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
              src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/CookiesNDreams-Front_1024x1024%402x.jpg"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              neque reiciendis dolores, accusantium dolor qui impedit. Cum
              labore officia inventore.
            </p>
          </div>
          <div className="special">
            <img
              src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/CookiesNDreams-Front_1024x1024%402x.jpg"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              neque reiciendis dolores, accusantium dolor qui impedit. Cum
              labore officia inventore.
            </p>
          </div>
          <div className="special">
            <img
              src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/CookiesNDreams-Front_1024x1024%402x.jpg"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              neque reiciendis dolores, accusantium dolor qui impedit. Cum
              labore officia inventore.
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
          src="https://dreams-come-brew-app.s3.us-east-2.amazonaws.com/CookiesNDreams-Front_1024x1024%402x.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default Products;
