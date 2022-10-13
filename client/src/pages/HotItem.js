import React, { Fragment, useContext } from "react";
import products from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartContext from "../context/CartContext";


import {
  faCartShopping,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";

const HotItems = () => {

  const { handleClick } = useContext(CartContext)

  return (
    <>
      <h2 className="productHeader">Hot Item</h2>

      <div className="products">
        {products.map((product,i) => {
          const handleObj = () => {
            handleClick(product)
          }
          return (

            <div className="product-page-card" key={product.id}>
              <article className="product-page-single" key={product.id} id={product.id}>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="df">
                        <Link className="single-link" to={`/products/${product.target}`}>
                            <img className="item-image" src={product.image} alt="" />
                        </Link>
                        <div>
                            <button onClick={handleObj} className=" add-to-cart-btn" id={product.id}>Add to Cart
                                <FontAwesomeIcon className="cart-icon" icon={faCartShopping}></FontAwesomeIcon>
                            </button>
                            <p className="qty">Qty: {product.qty} +</p>
                            <FontAwesomeIcon className="rating-icon" icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className="rating-icon" icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className="rating-icon" icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className="rating-icon" icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className="rating-icon" icon={faStarHalf}></FontAwesomeIcon>
                            <div className="SalePrice-Container">
                                <h3 className="Sale-info">50% off</h3>
                                <h3 className="Sale-Price">${product.salePrice}.99</h3>
                            </div>    
                            <br></br>
                            <p>was: <span style={{textDecoration: 'line-through'}}>${product.price}.99</span></p>
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

export default HotItems;