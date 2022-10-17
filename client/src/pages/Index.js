import React, {useState} from 'react'
import DealsCompo from '../components/DealsCompo'
import products from '../data'
import HomeCard from '../components/HomeCard.js';
import ProductsItem from '../components/ProductsItem'
import SearchBar from '../components/SearchBar';
const Index = () => {

  //This is the homepage
  const [items, setItems] = useState(products); // from data.js


  
  return (
    <div className='home'>
      <div className='home_container'>
            <h2 className='above-pics'>Enjoy at home,</h2>
           <div className='home-img-box'>
            <img className='home-img home-img-one' src="https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80" alt="" />
            <img className='home-img home-img-two' src="https://images.unsplash.com/photo-1509047319667-c1a8de3000c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="" />
            <img className='home-img home-img-three' src="https://images.unsplash.com/photo-1512153371649-ebbe07fc197d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="" />
            <img className='home-img home-img-four' src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="" />
  <SearchBar />
    

            </div>
            <h2 className='below-pics'>...and on the go!</h2>
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
    <marquee scrolldelay="1" marquee loop="4" className='marquee'>Donate to Victims of hurrican Ian &nbsp;&nbsp;&nbsp;&nbsp;    | &nbsp;&nbsp;&nbsp;&nbsp; Guided By Your Taste + Brewing Habits&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;Flexible Plans &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;Delivered on Your Schedule&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp; Ethically Sourced&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;  Support Local Businesses&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;Free Shipping &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; 25+ Curated Coffees &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; Family Owned </marquee>
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