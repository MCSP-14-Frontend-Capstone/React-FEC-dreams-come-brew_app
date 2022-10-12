
import { useState, createContext } from "react";


const CartContext = createContext()





export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const handleClick = (product) => {

        setCart([...cart, product])
        console.log(cart)
    }


    const removeItem = (id) => {
        const newArr = cart.filter((elem) => elem.id != id)
        setCart(newArr)
    }




    return <CartContext.Provider value={{ cart, handleClick, removeItem }}>


        {children}
    </CartContext.Provider>
}

export default CartContext
