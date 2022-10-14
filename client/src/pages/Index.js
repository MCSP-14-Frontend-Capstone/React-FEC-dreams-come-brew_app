import React, {useState} from 'react'
import DealsCompo from '../components/DealsCompo'
import products from '../data'
import HomeCard from '../components/HomeCard.js';
import ProductsItem from '../components/ProductsItem'
const Index = () => {
  const [items, setItems] = useState(products)
  return (
    <div className='home'>
      <div className='home_container'>
           
       <div className="container">
        <div className="beside-image">
            <h2 className="best-seller-desc" >This month's Best Seller</h2>
            <div className="circles">
                  <div className="one-circ">Great Taste</div>
                  <div className="one-circ">Fat Burner</div>
                  <div className="one-circ">Low Calories</div>
                  <div className="one-circ">Ready To Go</div>
                  <div className="one-circ last">Smells Great</div>
                  <div className="one-circ last">Do Enjoy!</div>
            </div>

        </div>
      
        <img className="coffee-image" src="https://cdn.shopify.com/s/files/1/1475/5488/products/CookiesNDreams-Front_1024x1024@2x.jpg?v=1569419317" alt="" />
      </div>
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