<<<<<<< HEAD
import React, { useState } from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const SingleItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  const price = item.price;

  const [total, setTotal] = useState(price);

  const handleChange = (e) => {
    const qty = e.target.value;
    const sum = price * qty;
    setTotal(sum);
  };

  const handleRemove = (e) => {
    const id = e.target.id;
    removeItem(id);
  };

  return (
    <div className="single-item" id={item.id}>
      <div className="item-image-name">
        <img style={{ width: "5rem" }} src={item.image} alt="" />
        <div>
          <h1 className="item-name">{item.name}</h1>
          <p>about this item </p>
        </div>
      </div>
      <h1 className="item-p-q-t">
        <span>$</span>
        {item.price}
      </h1>
      <div className="item-qty">
        QTY
        <select onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <div className="remove-text" onClick={handleRemove} id={item.id}>
          Remove
        </div>
      </div>
      <h1 className="item-p-q-t">
        <span>$</span>
        {total}
      </h1>
    </div>
  );
};

export default SingleItem;
=======
import { useContext } from "react"
import CartContext from "../../context/CartContext"



const SingleItem = ({ item }) => {

    const { removeItem, Addon, onRemove } = useContext(CartContext)
    const total = item.price * item.cartQty
    const handleRemove = (e) => {
        const id = e.target.id
        removeItem(id)
    }


    return (
        <div className="single-item" id={item.id}>

            <div className="item-image-name">
                <img style={{ width: '5rem' }} src={item.image} alt='' />
                <div>
                    <h1 className="item-name">{item.name}</h1>
                    <p className="item-desc-text">{item.description}</p>
                </div>
            </div>
            <h1 className="item-p-q-t"><span>$</span>{item.price.toFixed(2)}</h1>
            <div className="item-qty">
                <div className="qty-btn">
                    <button className="add-qty-btn" onClick={() => { onRemove(item) }}>-</button>
                    <p className="cart-qty">{item.cartQty}</p>
                    <button className="remove-qty-btn" onClick={() => { Addon(item) }}>+</button>
                </div>
                <div className="remove-text" onClick={handleRemove} id={item.id}>Remove</div>
            </div>
            <h1 className="item-p-q-t"><span>$</span>{total.toFixed(2)}</h1>

        </div >
    )

}

export default SingleItem 
>>>>>>> ae1925b7a12e37173d00c2d56b1ed563a319cefd
