import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Login from '../Login'
import LoginContext from '../../context/LoginContext'
import CartRec from './CartRec'



const CheckoutPage = () => {
    const { logInIcon } = useContext(LoginContext)

    const arrLetter = ['A', 'H', 'K', 'M', 'W', 'P', 'Z']

    const random = Math.floor((Math.random() * 100000) + 10000);
    const letter = () => {
        return arrLetter[Math.floor(Math.random() * arrLetter.length)]
    }

    if (logInIcon === false) {
        return (<Login />
        )
    } else {
        return (
            <>
                <div className='purchase-box'>
                    <div className='thanks-box'>
                        <h1 className='thanks-text'>Thank You For Your Purchase</h1>
                        <h1>Your shipping order is: {letter() + random}</h1>
                    </div>
                    <Link to='/' >
                        <button className='backTo-btn'>Back To Shopping</button>
                    </Link>
                </div>
                <div className='rec-display'>
                    <div className='rec-container'>
                        <CartRec />
                    </div>
                </div>
            </>

        )
    }
}

export default CheckoutPage