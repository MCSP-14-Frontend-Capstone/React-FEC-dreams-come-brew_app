import React, { useState, useContext, } from 'react'
import Items from './Items'
import CartContext from '../../context/CartContext'
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
                        <h1 className='cart-header'>Ready To Checkout?</h1>
                    </div>
                </div>
                <div className='items-page'>
                    <div className='items-checkout-box'>
                        <Items />
                        <div className='summaryPage'>
                            <Summary />
                        </div>
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