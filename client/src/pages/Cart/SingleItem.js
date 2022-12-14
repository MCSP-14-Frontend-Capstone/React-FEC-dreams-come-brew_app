import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { useNavigate } from "react-router-dom";



const SingleItem = ({ item }) => {

    const navigate = useNavigate();

    const { removeItem, Addon, onRemove } = useContext(CartContext)
    const total = item.original_price * item.cartqty
    const handleRemove = (e) => {
        const id = e.target.id
        removeItem(id)
    }

    const handleSPP = (e) => {
        const id = e.target.id
        navigate(`/products/${id}`)
    }

    return (
        <div className="single-item" id={item.id}>

            <div className="item-image-name">
                <img className="sspImg" style={{ width: '5rem', height: '7rem', margin: 'auto 10px' }} src={item.image} alt='' onClick={handleSPP} id={item.target} />
                <div className="item-info-box">
                    <h1 className="item-name" onClick={handleSPP} id={item.target}>{item.name}</h1>
                    <p className="item-desc-text" onClick={handleSPP} id={item.target}>{item.description}</p>
                </div>
            </div>
            <h1 className="item-p-q-t"><span>$</span>{item.original_price}</h1>
            <div className="item-qty">
                <div className="qty-btn">
                    <button className="qty-btn-count" onClick={() => { onRemove(item) }}>-</button>
                    <p className="cart-qty">{item.cartqty}</p>
                    <button className="qty-btn-count" onClick={() => { Addon(item) }}>+</button>
                </div>
                <div className="remove-text" onClick={handleRemove} id={item.product_id}>Remove</div>
            </div>
            <h1 className="item-p-q-t"><span>$</span>{total}</h1>

        </div >
    )

}

export default SingleItem 