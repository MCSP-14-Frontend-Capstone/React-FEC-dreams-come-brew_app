import React, {useState} from 'react';
import DealsCompo from '../components/DealsCompo';
import BackgroundDeal from '../components/BackgroundDeal';
import products from '../data';

const Index = () => {
  //products data in state
  const [items, setItems] = useState(products)

  return (
    <div className='homeBody'>
        <BackgroundDeal items={items}/>    
        <DealsCompo items={items}/>
    </div>
  )
}

export default Index;