import React, { useState, useContext, } from 'react'
import CartHeader from './CartHeader'
import CartColumns from './CartColumn'
import Items from './Items'
import CartCheckout from './CartCheckout'
import CartContext from '../../context/CartContext'
import { Link } from "react-router-dom";
import whatever from './CheckoutPage'




const Cart = () => {

    const { cart } = useContext(CartContext)



    if (cart.length === 0) {
        return <h1>Your cart is empty</h1>
    } else {
        return (
            <div className='main-cart-page'>
                <div className='cart-table'>
                    <div className='cart-header-box'>
                        <CartHeader />
                        <CartColumns />
                <div className='items-page'>
                    <div className='items-checkout-box'>
                        <Items />
                        <Link to='/CheckoutPage'>
                        <div className='checkout-submit'>
                            <button>CHECKOUT</button>
                        </div>
                        </Link>

                    </div>

                </div>
                    </div>
                </div>
            </div>
        )
    }




}

export default Cart
/* <CartCheckout /> */