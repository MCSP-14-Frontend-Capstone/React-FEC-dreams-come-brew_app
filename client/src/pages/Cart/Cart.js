import React, { useState, useContext, } from 'react'
import Items from './Items'
import CartContext from '../../context/CartContext'
import CartRec from './CartRec'
import Summary from './Summary';



const Cart = () => {
    const { cart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <>
                <div className='empty-main'>
                    <div className='empty-div'>
                        <h2 className='cart-empty-text'>Your cart is empty</h2>
                        <img className='cart-img-empty' src='https://static.vecteezy.com/system/resources/previews/000/585/684/original/coffee-cup-logo-template-vector-icon-design.jpg' alt=''></img>
                    </div>
                </div>
                <div className='rec-display'>
                    <div className='rec-container'>
                        <CartRec />
                    </div>
                </div>
            </>

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
                        <div className='items-all'>
                            <Items />
                        </div>
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

