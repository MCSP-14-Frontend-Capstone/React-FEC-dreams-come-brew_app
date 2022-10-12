import React, {useState} from 'react';
import DealsCompo from '../components/DealsCompo';
import HomeCard from '../components/HomeCard.js';
import products from '../data';

const Index = () => {
  //products data in state
  const [items, setItems] = useState(products)

  return (
    <div className='homeBody'>
        <HomeCard items={items}/>    
        <DealsCompo items={items}/>
    </div>
  )
}

export default Index;