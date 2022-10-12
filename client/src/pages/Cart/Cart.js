import React, { useState } from 'react'
import CartHeader from './CartHeader'
import CartColumns from './CartColumn'
import Items from './Items'
import CartCheckout from './CartCheckout'


const products = [
    {
        id: 1, name: "Jasmine's  Roast", image: "https://images.unsplash.com/photo-1562113530-57ba467cea38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80", price: 19, qty: '25', description: "Premium coffe cultivated in the best farms in..."
    },

    {
        id: 2, name: "Mulan's  Bean", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80", price: 24, qty: '90', description: "Great coffe cultivated in the best farms in..."
    },

    {
        id: 3, name: "Rapunzel's Coffee", image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", price: 49, qty: '130', description: "Sweet coffe cultivated in the best farms in..."
    },

    {
        id: 4, name: "Aurora's Cure", image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80", price: 9, qty: '55', description: "Grade A coffe cultivated in the best farms in..."
    },

    {
        id: 5, name: "Jasmine's  Roast", image: "https://images.unsplash.com/photo-1562113530-57ba467cea38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80", price: 19, qty: '25', description: "Premium coffe cultivated in the best farms in..."
    }]
// const products = []

const Cart = () => {

    const [cart, setCart] = useState(products)
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