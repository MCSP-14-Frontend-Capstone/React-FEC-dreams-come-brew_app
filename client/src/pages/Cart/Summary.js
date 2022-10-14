import { Link } from 'react-router-dom';
import { useContext } from "react";
import LoginContext from '../../context/LoginContext';

const Summary = () => {
    const { logInIcon } = useContext(LoginContext)

    if (logInIcon === false) {
        return (
            <main className='summaryBox'>
                <h2 className='summaryTitle'>Order Summary</h2>
                <div>SubTotal: </div>
                <div>Fees: </div>
                <div>Taxes:</div>
                <div className='grandTotal'>Grand Total</div>
                <Link to='/Login'>
                    <button>Sign-in to checkout</button>
                </Link>
            </main>
        )
    } else {
        return (
            <div className='summaryBox'>
                <h2>Order Summary</h2>
                <div>SubTotal: </div>
                <div>Fees: </div>
                <div>Taxes:</div>
                <div className='grandTotal'>Grand Total</div>


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