import { useState, createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const handleClick = (product) => {
        const addedToCart = () => toast.success(`${product.name} Was added to your cart!`)
        setCart([...cart, product])
        addedToCart()
    }
    const removeItem = (id) => {
        const itemRemoved = () => toast.success("Item removed from cart.")
        const newArr = cart.filter((elem) => elem.id != id)
        setCart(newArr)
        itemRemoved()
    }
    return <CartContext.Provider value={{ cart, handleClick, removeItem }}>
        <ToastContainer position="bottom-right" autoclose={2500} theme="dark"/>
        {children}
    </CartContext.Provider>
}
export default CartContext