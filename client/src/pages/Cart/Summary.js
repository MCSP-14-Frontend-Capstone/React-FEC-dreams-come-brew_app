
import { Link, useParams } from 'react-router-dom';
import { useContext } from "react";
import LoginContext from '../../context/LoginContext';
import CartContext from '../../context/CartContext';
import axios from 'axios';
const Summary = () => {
    const { logInIcon } = useContext(LoginContext)
    const { cart, emptyCart, products } = useContext(CartContext)
    const subTotal = cart.reduce((total, item) => total + item.original_price * item.cartqty, 0)
    const tax = subTotal * 0.15
    const fees = 1.75
    const grandTotal = subTotal + tax + fees
    const { productTarget } = useParams();
    const product = products.find((product) => product.target === productTarget);
    
    
    
    
    const onSubmitform = async (e) => {
        e.preventDefault();
        console.log(cart);
        try {
           
            cart.map(async (elem) => {
                const response = await axios.post("http://localhost:3500/purchase", { product_name: elem.name, 
                subTotal, tax, fees,order_total:subTotal, grand_total: grandTotal, taxes:tax, order_quantity: elem.cartqty, users_id: 9, product_id:elem.product_id });
                console.log(response.data);
            })
            
           
            emptyCart();
        } catch (err) {
            console.log(err.response);
        }
    }

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
                    <div className='checkout-submit'>
                        <button className='checkout-btn'>Sign-in to checkout</button>
                    </div>

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
                        <button className='checkout-btn' onClick={onSubmitform}>CHECKOUT</button>
                    </div>
                </Link>
            </div>
        )
    }
};

export default Summary;

