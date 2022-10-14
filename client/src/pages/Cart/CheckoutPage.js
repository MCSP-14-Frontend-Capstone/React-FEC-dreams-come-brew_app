import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Login from '../Login'
import LoginContext from '../../context/LoginContext'

const CheckoutPage = () => {
    const { logInIcon } = useContext(LoginContext)

    if (logInIcon === false){
        return ( <Login />
        )
    }else{
        return (
        <div>
            <div>YOU'RE GOOD TO GO
                <h1>Thank You For Your Purchase</h1>
            </div>
            <Link to='/'>
                <button>Back To Shopping</button>
            </Link>
        </div>
    )
    }
}

export default CheckoutPage