import React, {useState} from 'react'
import DealsCompo from '../components/DealsCompo'
import products from '../data'

const Index = () => {
  //products data in state
  const [items, setItems] = useState(products)

  return (
    <div>
      <div>
        <DealsCompo items={items}/>
      </div>
    </div>
  )
}

export default Index;