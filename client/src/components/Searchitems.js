import React from 'react'
import products from '../data'
import { Link } from 'react-router-dom'

const Searchitems = ({product}) => {
  return (
    <div className='hide2'>
                <Link to={`/products/${product.target}`}>
                  <li key={product.id}> {product.name}</li>
                </Link>
    </div>
  )
}

export default Searchitems