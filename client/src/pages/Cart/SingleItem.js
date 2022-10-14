
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