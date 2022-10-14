import { Link } from 'react-router-dom';
import Login from '../Login';
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"


const Summary = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    const { cart } = useContext(CartContext)
    const subTotal = cart.reduce((total, item) => total + item.price * item.cartQty, 0)
    const tax = 2.50
    const fees = 1.70
    const grandTotal = subTotal + tax + fees

    if (!loggedIn) {
        return (
            <main className='summaryBox'>
                <h2 className='summaryTitle'>Order Summary</h2>
                <div>SubTotal:{subTotal} </div>
                <div>Fees:{fees} </div>
                <div>Taxes:{tax}</div>
                <div className='grandTotal'>Grand Total{grandTotal}</div>
                <Link to='/Login'>
                    <button>Sign-in to checkout</button>
                </Link>
            </main>
        )
    } else {
        return (
            <div className='summaryBox'>
                <h2>Order Summary</h2>
                <div>SubTotal:{subTotal} </div>
                <div>Fees:{fees} </div>
                <div>Taxes:{tax}</div>
                <div className='grandTotal'>Grand Total{grandTotal}</div>


                <Link to='/CheckoutPage'>
                    <div className='checkout-submit'>
                        <button>CHECKOUT</button>
                    </div>
                </Link>
            </div>
        )
    }
};

export default Summary;