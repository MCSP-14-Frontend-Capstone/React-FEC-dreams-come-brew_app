import React, {useState} from 'react'
import DealsCompo from '../components/DealsCompo'
import products from '../data'
import HomeCard from '../components/HomeCard.js';
import ProductsItem from '../components/ProductsItem'
const Index = () => {
  //This is the homepage
  const [items, setItems] = useState(products); // from data.js

  
  return (
    <div className='home'>
      <div className='home_container'>
            <h1 className='main-header'>Deals on top Brands</h1>
          <div className='home_row'>
            <ProductsItem items ={items} /> 
          </div>
          </div>
          <div className='homeBody'>
        <HomeCard items={items}/>    
        <DealsCompo items={items}/>
    </div>
    </div>
  )
}
export default Index;