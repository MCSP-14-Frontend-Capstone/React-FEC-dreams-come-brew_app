import React, { useState } from "react"
import { useContext } from "react"
import CartContext from "../../context/CartContext"



const SingleItem = ({ item }) => {

    const { removeItem, Addon, onRemove } = useContext(CartContext)

    const price = item.price

    const [total, setTotal] = useState(price)

    const handleChange = (e) => {
        const qty = e.target.value
        const sum = price * qty
        setTotal(sum)
    }









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
                    <p>about this item </p>
                </div>
            </div>
            <h1 className="item-p-q-t"><span>$</span>{item.price}</h1>
            <div className="item-qty">
                <div className="qty-btn">
                    <button onClick={() => { onRemove(item) }}>-</button>
                    <p>{item.cartQty}</p>
                    <button onClick={() => { Addon(item) }}>+</button>
                </div>
                <div className="remove-text" onClick={handleRemove} id={item.id}>Remove</div>
            </div>
            <h1 className="item-p-q-t"><span>$</span>{total}</h1>

        </div >
    )

}

export default SingleItem 