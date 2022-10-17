import React from 'react'
import products from '../data'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import SearchContext from '../context/SearchContext'

const Searchitems = ({product}) => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
const handleClick = () => {
 setSearchValue("")
}
  return (
    <div className='hide2'>
                <Link to={`/products/${product.target}`}>
                  <li onClick={handleClick} key={product.id}> {product.name}</li>
                </Link>
    </div>
  )
}

export default Searchitems