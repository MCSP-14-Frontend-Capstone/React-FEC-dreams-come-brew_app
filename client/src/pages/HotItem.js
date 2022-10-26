import React, { Fragment, useContext } from "react";
// import products from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddedContext from "../context/AddedContext";
import CartContext from "../context/CartContext";


import { // This is how we import icon

  faCartShopping,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const HotItems = () => {
  const { handleClick, cart, setCart, Addon,products } = useContext(CartContext);
  const { addedText, changeText } =
    useContext(AddedContext);

  return (
    <>
    <div className="HotItem-Head"></div>
      <div className="HotItems-Container">
      {products.map((product) => {
          const { products_id } = product;

          const handleObj = (e) => {
            const id = e.target.id;
            const found = cart.find((elem) => elem.product_id === product.product_id)
            if (found) {
              console.log(found)
              Addon(found)
            } else {
              console.log('elese')
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
          
          };
          return (
            <div className="HotItem-Card" key={product.product_id} id={product.product_id}>
              
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
                <div className="HotItem-info">
                  <p className="Hotproduct-name">{product.name}</p>
                  <p  className="price">${product.sale_price}</p>
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