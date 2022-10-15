import { Link } from 'react-router-dom';
import { useContext } from "react";
import LoginContext from '../../context/LoginContext';
import CartContext from '../../context/CartContext';

const Summary = () => {
    const { logInIcon } = useContext(LoginContext)
    const { cart, emptyCart } = useContext(CartContext)
    const subTotal = cart.reduce((total, item) => total + item.price * item.cartQty, 0)
    const tax = subTotal * 0.15
    const fees = 1.75
    const grandTotal = subTotal + tax + fees


    if (logInIcon === false) {
        return (
            <main className='summaryBox'>
                <h2 className='summaryTitle'>Order Summary</h2>
                <div className='total-elem'>SubTotal: <div className='summaryElements'><span>$</span>{subTotal.toFixed(2)}</div></div>
                <div className='total-elem'>Fees: <div className='summaryElements'><span>$</span>{fees}</div></div>
                <div className='total-elem'>Taxes: <div className='summaryElements'><span>$</span>{tax.toFixed(2)}</div></div>
                <div className='total-elem'>Delivery: <div className='summaryElements'>Free</div></div>
                <div className='grandTotal'>Grand Total: <div className='summaryElements'><span>$</span>{grandTotal.toFixed(2)}</div></div>
                <Link to='/Login'>
                    <button className='checkout-btn'>Sign-in to checkout</button>
                </Link>
            </main>
        )
    } else {
        return (
            <div className='summaryBox'>
                <h2 className='summaryTitle'>Order Summary</h2>
                <div className='total-elem'>SubTotal: <div className='summaryElements'>${subTotal.toFixed(2)}</div></div>
                <div className='total-elem'>Fees: <div className='summaryElements'>${fees}</div></div>
                <div className='total-elem'>Taxes: <div className='summaryElements'><span>$</span>{tax.toFixed(2)}</div></div>
                <div className='total-elem'>Delivery: <div className='summaryElements'>Free</div></div>
                <div className='grandTotal'>Grand Total: <div className='summaryElements'><span>$</span>{grandTotal.toFixed(2)}</div></div>
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


