import SingleItem from "./SingleItem"
import { useContext } from "react"
import CartContext from "../../context/CartContext"


const Items = () => {

    const { cart } = useContext(CartContext) //
    return (
        <>
            {cart.map((item) => (
                <SingleItem key={item.id} item={item} />

            ))}

        </>
    )
}


export default Items 