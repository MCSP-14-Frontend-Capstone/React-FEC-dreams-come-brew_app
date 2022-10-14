import { Link } from 'react-router-dom';
import { useContext } from "react";
import LoginContext from '../../context/LoginContext';
import CartContext from '../../context/CartContext';

const Summary = () => {
    const { logInIcon } = useContext(LoginContext)
    const { cart, emptyCart } = useContext(CartContext)
    const subTotal = cart.reduce((total, item) => total + item.price * item.cartQty, 0)
    const tax = 2.25
    const fees = 1.75
    const grandTotal = subTotal + tax + fees

    if (logInIcon === false) {
        return (
            <main className='summaryBox'>
                <h2 className='summaryTitle'>Order Summary</h2>
                <div className='total-elem'>SubTotal <span>$</span>{subTotal.toFixed(2)}</div>
                <div className='total-elem'>Fees <span>$</span>{fees}</div>
                <div className='total-elem'>Taxes <span>$</span>{tax}</div>
                <div className='grandTotal'>Grand Total <span>$</span>{grandTotal.toFixed(2)}</div>
                <Link to='/Login'>
                    <button className='checkout-btn'>Sign-in to checkout</button>
                </Link>
            </main>
        )
    } else {
        return (
            <div className='summaryBox'>
                <h2 className='summaryTitle'>Order Summary</h2>
                <div className='total-elem'>SubTotal <span>$</span>{subTotal.toFixed(2)}</div>
                <div className='total-elem'>Fees <span>$</span>{fees}</div>
                <div className='total-elem'>Taxes <span>$</span>{tax}</div>
                <div className='grandTotal'>Grand Total <span>$</span>{grandTotal.toFixed(2)}</div>
                <Link to='/CheckoutPage'>
                    <div className='checkout-submit'>
                        <button className='checkout-btn' onClick={emptyCart}>CHECKOUT</button>
                    </div>
                </Link>
            </div>
        )
    }
};

export default Summary;