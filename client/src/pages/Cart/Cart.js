import React, { useState, useContext } from 'react'
import CartHeader from './CartHeader'
import CartColumns from './CartColumn'
import Items from './Items'
import CartCheckout from './CartCheckout'
import CartContext from '../../context/CartContext'





const Cart = () => {

    const { cart } = useContext(CartContext)

    // console.log(cart)




    if (cart.length === 0) {
        return <h1>Your cart is empty</h1>
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
                        <div className='checkout-submit'>
                            <CartCheckout />
                        </div>

                    </div>

                </div>
            </div>
        )
    }




}

export default Cart