import {Link} from 'react-router-dom'

const CheckoutPage = () =>{
    return(
        <div>
             <div>YOUR GOOD TO GO 
                <h1 className='Checkout-messege'>Thank You For Your Purchase</h1>
            </div>
            <Link to ='/'>
            <button className='BackButton'>Back To Shopping</button>
            </Link>
        </div>
    )
}

export default CheckoutPage