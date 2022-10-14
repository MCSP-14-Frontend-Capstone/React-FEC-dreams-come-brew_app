import React, { Fragment, useContext } from "react";
import products from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartContext from "../context/CartContext";

import {
  faCartShopping,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const HotItems = () => {
  const { handleClick } = useContext(CartContext);

  return (
    <>
    <div className="HotItem-Head">HotItems Compo</div>
      <div className="HotItems-Container">
        
        {products.map((product) => {
          
          const handleObj = () => {
            handleClick(product);
          };
          return (
            <div className="HotItem-Card" key={product.id} id={product.id}>
              
              <Link className="single-link" to={`/products/${product.target}`}>
                <img className="HotItem-Img" src={product.image} alt="" />
              </Link>
              <div className="belowHotItem-image">
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
                  <p className="Hotproduct-name">{product.name}</p>

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HotItems;