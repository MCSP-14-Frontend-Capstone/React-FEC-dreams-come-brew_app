import React, { useState, useContext, } from 'react'
import CartHeader from './CartHeader'
import CartColumns from './CartColumn'
import Items from './Items'
import CartContext from '../../context/CartContext'
import { Link } from "react-router-dom";
import CartRec from './CartRec'
import Summary from './Summary';



const Cart = () => {
    const { cart } = useContext(CartContext)
   
    if (cart.length === 0) {
        return (
            <div className='main-cart-page'>
                <div className='cart-empty-box'>
                    <h1 className='cart-empty-text'>Your cart is empty</h1>
                </div>
                <div className='rec-display'>
                    <div className='rec-container'>
                        <CartRec />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='main-cart-page'>
                <div className='cart-table'>
                    <div className='cart-header-box'>
                        <CartHeader />
                        <CartColumns />
                    </div>
                </div>
                <div className='items-page'>
                    <div className='items-checkout-box'>
                        <Items />



                        </div>

                        <div className='summaryPage'>
                            <Summary />
                        </div>
               
                </div>
                <div className='rec-display'>
                    <div className='rec-container'>
                        <CartRec />
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart
/* <CartCheckout /> */