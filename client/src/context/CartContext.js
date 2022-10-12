
import { useState, createContext } from "react";

const CartContext = createContext()






export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const handleClick = (e) => {

        console.log(e.target.id)

    }
















    return <CartContext.Provider value={{ handleClick }}>


        {children}
    </CartContext.Provider>
}

export default CartContext
