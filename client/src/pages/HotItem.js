import React, { Fragment, useContext } from "react";
import products from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddedContext from "../context/AddedContext";
import CartContext from "../context/CartContext";


import { // This is how we import icon

  faCartShopping,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const HotItems = () => {
  const { handleClick, cart, setCart, Addon } = useContext(CartContext);
  const { addedText, changeText } =
    useContext(AddedContext);

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
                    style={{
                      color: "white",
                      backgroundColor: "black"
                    }}
                    className=" add-to-cart-btn"
                    id={product.id}
                  >
                    {addedText}
                  </button>

                  <Link to={'/cart'}>

                    <button className=" buy-now-btn" id={product.id} onClick={handleObj}>
                      BUY NOW{" "}
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </button>

                  </Link>
                </div>
                <div className="HotItem-info">
                  <p className="Hotproduct-name">{product.name}</p>
                  <p  className="price">${product.price}</p>
                </div>
                <div className="HotItem-qty">
                  <p className="qty">{product.qty} left</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HotItems;