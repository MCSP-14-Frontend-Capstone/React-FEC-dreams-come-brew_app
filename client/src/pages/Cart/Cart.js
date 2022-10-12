import React, { useState } from 'react'
import CartHeader from './CartHeader'
import CartColumns from './CartColumn'
import Items from './Items'
import CartCheckout from './CartCheckout'



const arr = [
    { id: 1, name: 'test', price: 12.20, quantity: 2, total: 20, image: 'https://images.unsplash.com/photo-1562113530-57ba467cea38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80' },
    { id: 2, name: 'cake', price: 10.10, quantity: 1, total: 10, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80' },
    { id: 3, name: 'house', price: 13.25, quantity: 1, total: 10, image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
    { id: 4, name: 'coffe', price: 15.25, quantity: 1, total: 10, image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
    { id: 5, name: 'car', price: 19.25, quantity: 1, total: 10, image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' }]

// const arr = []

const Cart = () => {

    const [cart, setCart] = useState(arr)
    const removeItem = (id) => {
        const newArr = cart.filter((elem) => elem.id != id)
        setCart(newArr)
    }



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
                        <Items cart={cart} removeItem={removeItem} />
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