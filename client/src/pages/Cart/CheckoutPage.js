import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    return (
        <div>
            <div>YOUR GOOD TO GO
                <h1>Thank You For Your Purchase</h1>
            </div>
            <Link to='/'>
                <button>Back To Shopping</button>
            </Link>
        </div>
    )
}

export default CheckoutPage