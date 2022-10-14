

import React, { useState, useContext, } from 'react'
import Items from './Items'
import CartContext from '../../context/CartContext'
import CartRec from './CartRec'
import Summary from './Summary';



const Cart = () => {
    const { cart } = useContext(CartContext)
<<<<<<< HEAD
   
=======

>>>>>>> ae1925b7a12e37173d00c2d56b1ed563a319cefd
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
<<<<<<< HEAD
                        <CartHeader />
                   
=======
                        <h1 className='cart-header'>Ready To Checkout?</h1>
>>>>>>> ae1925b7a12e37173d00c2d56b1ed563a319cefd
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
