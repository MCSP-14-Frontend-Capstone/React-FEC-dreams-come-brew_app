import { useState, createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartContext = createContext()



export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);

    const [cart, setCart] = useState([])

    const Addon = (item) => {
        const exist = cart.find((x) => x.product_id === item.product_id)
        console.log(exist)
        if (exist) {
            setCart(
                cart.map((x) =>
                    x.product_id === item.product_id ? { ...exist, cartqty: exist.cartqty + 1 } : x
                )
            )
        } else {
            setCart([...cart, { ...item, cartqty: 1 }])
        }
    }

    const onRemove = (item) => {
        const exist = cart.find((x) => x.product_id === item.product_id)

        if (exist.cartqty === 1) {
            console.log('nothing')
        } else {
            setCart(
                cart.map((x) =>
                    x.product_id === item.product_id ? { ...exist, cartqty: exist.cartqty - 1 } : x
                )
            )
        }
    }




    const emptyCart = () => {
        setCart([])
    }


    const handleClick = (product) => {
        const addedToCart = () => toast.success(`${product.name} Was added to your cart!`)
        setCart([...cart, product])
        addedToCart()
    }





    const removeItem = (id) => {
        const itemRemoved = () => toast.success("Item removed from cart.")
        const newArr = cart.filter((elem) => elem.product_id != id)
        setCart(newArr)
        itemRemoved()
    }



    return <CartContext.Provider value={{ cart, handleClick, removeItem, emptyCart, Addon, onRemove, setCart, products, setProducts, singleProduct, setSingleProduct}}>
        <ToastContainer position="bottom-right" autoclose={2500} theme="dark" />

        {children}
    </CartContext.Provider>
}
export default CartContext